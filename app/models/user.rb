class User < ApplicationRecord
    attr_reader :password

    validates :email, :password_digest, :session_token, presence: true
    validates :email, uniqueness: true
    validates :password, length: {minimum: 4}, allow_nil: true

    after_initialize :ensure_session_token
    validate :is_email_valid?

    has_many :notes,
        foreign_key: :author_id,
        class_name: "Note"

    has_many :notebooks,
        foreign_key: :author_id,
        class_name: "Notebook"

    has_many :note_tags,
        foreign_key: :author_id,
        class_name: "NoteTag"

    has_many :tags,
        foreign_key: :author_id,
        class_name: "Tag"

    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)
        if user
            return user.is_password?(password) ? user : nil
        else
            return nil
        end
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def reset_session_token!
        generate_session_token
        save!
        self.session_token
    end

    def is_email_valid?
        email_parts = self.email.split("@")
        if !email_parts[1]
            errors.add(:email, "address is invalid")
        elsif !email_parts[1].split(".")[1]
            errors.add(:email,"address is invalid")
        else
            return true
        end
    end

    private
    def ensure_session_token
        generate_session_token unless self.session_token
    end

    def generate_session_token
        self.session_token = SecureRandom.urlsafe_base64
        return self.session_token
    end

end
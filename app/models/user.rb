class User < ApplicationRecord
    attr_reader :password

    validates :email, :password_digest, :session_token, presence: true
    validates :email, uniqueness: true
    validates :password, length: {minimum: 4}, allow_nil: true

    after_initialize :ensure_session_token

    has_many :notes,
        foreign_key: :author_id,
        class_name: "Note"

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

    private
    def ensure_session_token
        generate_session_token unless self.session_token
    end

    def generate_session_token
        self.session_token = SecureRandom.urlsafe_base64
        return self.session_token
    end

end
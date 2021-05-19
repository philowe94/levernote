class Note < ApplicationRecord
    validates :author_id, presence: true

    belongs_to :author,
        foreign_key: :author_id,
        class_name: "User"
end
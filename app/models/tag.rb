class Tag < ApplicationRecord
    validates :name, presence: true
    validates :author_id, presence: true

    belongs_to :user,
        foreign_key: :author_id,
        class_name: "User"

    has_many :note_tags,
        foreign_key: :tag_id,
        class_name: "NoteTag"

    has_many :notes,
        through: :note_tags
end
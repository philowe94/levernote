class Note < ApplicationRecord
    validates :author_id, presence: true

    belongs_to :author,
        foreign_key: :author_id,
        class_name: "User"

    has_many :note_tags,
        foreign_key: :note_id,
        class_name: "NoteTag"
    
    has_many :tags,
        through: :note_tags
end
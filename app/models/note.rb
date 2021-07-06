class Note < ApplicationRecord
    validates :author_id, presence: true

    belongs_to :author,
        foreign_key: :author_id,
        class_name: "User"
    
    belongs_to :notebook,
        foreign_key: :notebook_id,
        class_name: "Notebook"

    has_many :note_tags,
        foreign_key: :note_id,
        class_name: "NoteTag"
    
    has_many :tags,
        through: :note_tags
end
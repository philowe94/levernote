class Notebook < ApplicationRecord
    validates :name, :author_id, presence: true

    belongs_to :author,
        foreign_key: :author_id,
        class_name: "User"

    has_many :notes,
        foreign_key: :notebook_id,
        class_name: "Note"
end
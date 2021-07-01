class AddAuthorIdColumnToNoteTags < ActiveRecord::Migration[5.2]
  def change
    add_column :note_tags, :author_id, :integer

    add_index :note_tags, :author_id
  end
end

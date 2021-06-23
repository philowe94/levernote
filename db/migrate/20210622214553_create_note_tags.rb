class CreateNoteTags < ActiveRecord::Migration[5.2]
  def change
    create_table :note_tags do |t|
      t.integer :note_id
      t.integer :tag_id
    end
  end
end

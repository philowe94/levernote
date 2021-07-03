class AddUniqueIndexToTags < ActiveRecord::Migration[5.2]
  def change
    add_index :tags, [:name, :author_id], unique: true
  end
end

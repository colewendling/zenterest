class CreateBoards < ActiveRecord::Migration[5.2]
  def change
    create_table :boards do |t|
      t.string :title, null: false, unique: true
      t.string :description
      t.integer :author_id, null: false
      t.timestamps
    end
      t.index :author_id
  end
end

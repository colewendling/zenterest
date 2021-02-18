class CreatePins < ActiveRecord::Migration[5.2]
  def change
    create_table :pins do |t|
      t.string :title, null: false
      t.string :description, null: false
      t.string :url, null: false
      t.integer :author_id, null: false
      t.timestamps
    end
    t.index :title
    t.index :author_id
  end
end

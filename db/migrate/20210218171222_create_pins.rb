class CreatePins < ActiveRecord::Migration[5.2]
  def change
    create_table :pins do |t|
      t.string :title, null: false, index: true
      t.string :description, null: false, index: true
      t.string :url, null: false
      t.integer :author_id, null: false, index: true
      t.timestamps
    end
  end
end

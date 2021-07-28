class ChangeColumnInPins < ActiveRecord::Migration[5.2]
  def change
    remove_column :pins, :url
    add_column :pins, :board_id, :integer, null:false
  end
end

class RenameElaptopIdToLaptop < ActiveRecord::Migration[6.0]
  def change
    rename_column :rentals, :laptop_id, :laptop
  end
end

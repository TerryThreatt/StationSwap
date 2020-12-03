class RemoveColumnLaptopFromRentals < ActiveRecord::Migration[6.0]
  def change
    remove_column :rentals, :laptop 
  end
end

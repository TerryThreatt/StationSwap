class RemoveLaptopIndexFromRentals < ActiveRecord::Migration[6.0]
  def change
    remove_index :rentals, :laptop 
  end
end

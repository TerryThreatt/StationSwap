class RemoveLaptopsKeyFromRentals < ActiveRecord::Migration[6.0]
  def change
    remove_foreign_key :rentals, column: :laptop 
  end
end

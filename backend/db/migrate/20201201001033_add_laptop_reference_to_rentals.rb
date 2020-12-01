class AddLaptopReferenceToRentals < ActiveRecord::Migration[6.0]
  def change
    add_reference :rentals, :laptop, index: true, foreign_key: true 
  end
end

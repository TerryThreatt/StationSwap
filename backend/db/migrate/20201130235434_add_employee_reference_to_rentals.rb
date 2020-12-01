class AddEmployeeReferenceToRentals < ActiveRecord::Migration[6.0]
  def change
    add_reference :rentals, :employee, index: true, foreign_key: true 
  end
end

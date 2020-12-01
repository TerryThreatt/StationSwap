class RemoveEmployeeIndexForRentals < ActiveRecord::Migration[6.0]
  def change
    remove_index :rentals, column: :employee_number
  end
end

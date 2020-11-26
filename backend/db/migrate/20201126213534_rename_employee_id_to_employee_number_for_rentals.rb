class RenameEmployeeIdToEmployeeNumberForRentals < ActiveRecord::Migration[6.0]
  def change
    rename_column :rentals, :employee_id, :employee_number
  end
end

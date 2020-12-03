class RemoveColumnEmployeeNumberFromemployees < ActiveRecord::Migration[6.0]
  def change
    remove_column :employees, :employee_number
    remove_column :rentals, :employee_number
  end
end

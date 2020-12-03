class RemoveEmployeeIdColumnLaptopTable < ActiveRecord::Migration[6.0]
  def change
    remove_column :laptops, :employee_id
    remove_column :rentals, :employee_id
  end
end

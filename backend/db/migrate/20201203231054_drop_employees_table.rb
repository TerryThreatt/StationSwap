class DropEmployeesTable < ActiveRecord::Migration[6.0]
  def change
    remove_index :laptops, :employee_id
    remove_index :rentals, :employee_id
    drop_table :employees, force: :cascade
  end
end

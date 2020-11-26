class RenameEmployeeIdToEmployeeNumber < ActiveRecord::Migration[6.0]
  def change
    rename_column :employees, :employee_id, :employee_number
  end
end

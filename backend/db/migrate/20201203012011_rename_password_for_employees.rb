class RenamePasswordForEmployees < ActiveRecord::Migration[6.0]
  def change
    rename_column :employees, :password_digest, :password
  end
end

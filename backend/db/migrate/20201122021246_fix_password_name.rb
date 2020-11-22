class FixPasswordName < ActiveRecord::Migration[6.0]
  def change
    rename_column :employees, :password, :password_digest
  end
end

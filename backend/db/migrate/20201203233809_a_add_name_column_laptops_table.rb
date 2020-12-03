class AAddNameColumnLaptopsTable < ActiveRecord::Migration[6.0]
  def change
    add_column :rentals, :name, :string
    add_column :rentals, :email, :string
  end
end

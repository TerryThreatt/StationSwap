class AddEmployeeReferenceToLaptops < ActiveRecord::Migration[6.0]
  def change
    add_reference :laptops, :employee, index: true, foreign_key: true 
  end
end

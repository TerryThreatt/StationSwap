class UpdateEmployeeForeignKey < ActiveRecord::Migration[6.0]
  def change
    remove_foreign_key :rentals, column: :employee_number
  end
end

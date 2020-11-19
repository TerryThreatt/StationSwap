class CreateRentals < ActiveRecord::Migration[6.0]
  def change
    create_table :rentals do |t|
      t.datetime :request_date
      t.references :employee, null: false, foreign_key: true
      t.references :laptop, null: false, foreign_key: true

      t.timestamps
    end
  end
end

ActiveRecord::Schema.define(version: 2020_11_18_235853) do

  enable_extension "plpgsql"

  create_table "employees", force: :cascade do |t|
    t.string "name"
    t.string "email"
    t.string "password"
    t.integer "employee_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "laptops", force: :cascade do |t|
    t.string "name"
    t.text "specs"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "rentals", force: :cascade do |t|
    t.datetime "request_date"
    t.bigint "employee_id", null: false
    t.bigint "laptop_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["employee_id"], name: "index_rentals_on_employee_id"
    t.index ["laptop_id"], name: "index_rentals_on_laptop_id"
  end

  add_foreign_key "rentals", "employees"
  add_foreign_key "rentals", "laptops"
end

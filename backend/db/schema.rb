# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_12_01_001935) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "employees", force: :cascade do |t|
    t.string "name"
    t.string "email"
    t.string "password_digest"
    t.integer "employee_number"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "laptops", force: :cascade do |t|
    t.string "name"
    t.text "specs"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.bigint "employee_id"
    t.index ["employee_id"], name: "index_laptops_on_employee_id"
  end

  create_table "rentals", force: :cascade do |t|
    t.datetime "request_date"
    t.bigint "employee_number", null: false
    t.bigint "laptop", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.bigint "employee_id"
    t.bigint "laptop_id"
    t.index ["employee_id"], name: "index_rentals_on_employee_id"
    t.index ["laptop_id"], name: "index_rentals_on_laptop_id"
  end

  add_foreign_key "laptops", "employees"
  add_foreign_key "rentals", "employees"
  add_foreign_key "rentals", "laptops"
end

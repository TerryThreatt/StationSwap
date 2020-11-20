class Rental < ApplicationRecord
  belongs_to :employee
  belongs_to :laptop
  validates :request_date, :employee_id, :laptop_id, presence: true
end

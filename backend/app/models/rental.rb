class Rental < ApplicationRecord
  belongs_to :employee
  belongs_to :laptop
  validates :request_date, presence: true
end

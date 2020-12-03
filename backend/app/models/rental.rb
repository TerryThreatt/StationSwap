class Rental < ApplicationRecord
  belongs_to :laptop
  validates :request_date, :name, :email, presence: true
end

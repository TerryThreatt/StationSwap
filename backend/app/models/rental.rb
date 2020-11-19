class Rental < ApplicationRecord
  belongs_to :employee
  belongs_to :laptop
end

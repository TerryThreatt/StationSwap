class Laptop < ApplicationRecord
    has_many :rentals
    has_many :employees, through: :rentals
    validates :name, :specs, presence: true
end

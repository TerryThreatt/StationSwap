class Laptop < ApplicationRecord
    has_many :rentals
    has_many :employees, through: :rental
    validates :name, :specs, presence: true
end

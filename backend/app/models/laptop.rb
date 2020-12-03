class Laptop < ApplicationRecord
    has_many :rentals
    validates :name, :specs, presence: true
end

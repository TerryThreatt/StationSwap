class Employee < ApplicationRecord
    has_one :laptop
    has_many :rentals
    has_secure_password
    validates :name, :email, presence: true, uniqueness: true 
end

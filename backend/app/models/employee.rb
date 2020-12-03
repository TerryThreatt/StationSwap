class Employee < ApplicationRecord
    has_secure_password
    has_one :laptop
    has_many :rentals
    validates :name, :email, presence: true, uniqueness: true
end

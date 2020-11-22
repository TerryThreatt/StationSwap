class Employee < ApplicationRecord
    has_one :laptop
    has_secure_password
    validates :name, :email, :password_digest, presence: true

end

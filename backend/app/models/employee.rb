class Employee < ApplicationRecord
    has_one :laptop 
    validates :name, :email, :password, presence: true

    // Employee id method
end

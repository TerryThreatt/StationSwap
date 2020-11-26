class EmployeeSerializer < ActiveModel::Serializer
    attributes :id, :name, :email, :employee_number
    has_one :laptop
    has_many :rentals 
end
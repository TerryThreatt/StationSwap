class EmployeeSerializer < ActiveModel::Serializer
    attributes :id, :name, :email, :employee_number
    has_one :laptop
end
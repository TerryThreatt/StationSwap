class EmployeeSerializer < ActiveModel::Serializer
    attributes :id, :name, :email, :employee_id
    has_one :laptop
end
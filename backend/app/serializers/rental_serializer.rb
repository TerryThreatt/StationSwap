class RentalSerializer < ActiveModel::Serializer
    attributes :id, :request_date, :employee_id, :laptop_id
    belongs_to :employee
    belongs_to :laptop
end
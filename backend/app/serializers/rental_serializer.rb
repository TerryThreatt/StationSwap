class RentalSerializer < ActiveModel::Serializer
    attributes :id, :request_date, :employee_number, :laptop
    belongs_to :employee
    belongs_to :laptop
end
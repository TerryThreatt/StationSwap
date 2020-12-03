class RentalSerializer < ActiveModel::Serializer
  attributes :id, :request_date
  belongs_to :employee
  belongs_to :laptop
end

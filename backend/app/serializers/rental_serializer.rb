class RentalSerializer < ActiveModel::Serializer
  attributes :id, :request_date, :name, :email
  belongs_to :laptop
end

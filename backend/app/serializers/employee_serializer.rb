class EmployeeSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :password_digest
  has_one :laptop
  has_many :rentals
end

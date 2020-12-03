class EmployeeSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :email, :password_digest
  has_one :laptop
  has_many :rentals
end

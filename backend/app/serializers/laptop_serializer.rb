class LaptopSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :specs
  has_many :rentals
  has_many :employees, through: :rentals
end

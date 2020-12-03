class LaptopSerializer < ActiveModel::Serializer
  attributes :id, :name, :specs
  has_many :rentals
  has_many :employees, through: :rentals
end

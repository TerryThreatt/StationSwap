class LaptopSerializer < ActiveModel::Serializer
  attributes :id, :name, :specs
  has_many :rentals
end

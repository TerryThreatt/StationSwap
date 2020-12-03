class RentalSerializer
  include FastJsonapi::ObjectSerializer
  attributes :request_date
  belongs_to :employee
  belongs_to :laptop
end

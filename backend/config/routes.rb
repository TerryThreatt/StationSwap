Rails.application.routes.draw do
  resources :rentals
  resources :laptops
  resources :employees

  scope '/auth' do
    post "/signin", to: "employee_token#create"
    post "/signup", to: "employees#create"
  end 
end

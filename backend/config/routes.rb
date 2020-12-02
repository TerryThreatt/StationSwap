Rails.application.routes.draw do
  resources :rentals
  resources :laptops
  resources :employees
  post "/login", to: "employees#login"
  get "/auto_login", to: "employees#auto_login"
end

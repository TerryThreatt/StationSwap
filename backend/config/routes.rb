Rails.application.routes.draw do
  resources :rentals
  resources :laptops
  resources :employees
  post "/signin", to: "employees#signin"
  get "/auto_login", to: "employees#auto_login"
end

Rails.application.routes.draw do
  resources :hotels
  resources :attractions
  resources :areas
  resources :types
  resources :trips
  get '/trips/:area/:type', to: 'trips#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end

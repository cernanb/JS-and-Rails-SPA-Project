Rails.application.routes.draw do
  resources :hotels
  resources :attractions
  resources :areas
  resources :types
  resources :trips
  get '/trips/:area_id/:type_id', to: 'trips#index'
end

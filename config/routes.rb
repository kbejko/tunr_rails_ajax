Rails.application.routes.draw do
  root to: 'artists#index'
  get '/test_ajax', to: 'artists#test_ajax'

  resources :songs, only: [:index, :show]
  resources :artists do
    resources :songs
    resources :genres
  end
end

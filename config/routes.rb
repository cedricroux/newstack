Rails.application.routes.draw do
  root :to => 'pages#home'

  get '/users/edit' => 'users#edit', :as => 'edit_user'
  resources :users, :only => [:new, :create, :index, :update, :show]

  get '/login' => 'session#new'
  post '/login' => 'session#create'
  delete '/login' => 'session#destroy'
end

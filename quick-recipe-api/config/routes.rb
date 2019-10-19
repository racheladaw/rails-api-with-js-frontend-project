Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get '/recipes' => 'recipes#index'
  get '/recipes/:ingredient_name' => 'recipes#show'
  post '/recipes' => 'recipes#create'

  get '/ingredients' => 'ingredients#index'
end

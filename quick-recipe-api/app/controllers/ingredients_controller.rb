class IngredientsController < ApplicationController

  def index
    ingredients = Ingredient.all

    render json: IngredientSerializer.new(ingredients)
  end
  
end

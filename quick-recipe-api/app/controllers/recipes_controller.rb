class RecipesController < ApplicationController

  def index
    recipes = Recipe.all

    render json: RecipeSerializer.new(recipes)
  end

  def show
    recipes = Ingredient.find_by(name: params[:ingredient_name]).recipes

    render json: RecipeSerializer.new(recipes.sample)
  end

  def create
    recipe = Recipe.new(recipe_params)
    ingredients = params[:ingredients].map { |ingredient| Ingredient.find_or_create_by(name: ingredient) }
    recipe.ingredients << ingredients
    recipe.save
    render json: RecipeSerializer.new(recipe)
  end

  private

    def recipe_params
      params.require(:recipe).permit(:title, :recipe_link, :image_link)
    end

end

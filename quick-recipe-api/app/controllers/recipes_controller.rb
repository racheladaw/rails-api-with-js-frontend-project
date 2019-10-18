class RecipesController < ApplicationController

  def index
    recipes = Recipe.all

    render json: RecipeSerializer.new(recipes)
  end

  def show
    recipe = Recipe.find(params[:id])

    render json: RecipeSerializer.new(recipe)
  end

  def create
    recipe = Recipe.new
    ingredients = params[:ingredients].map { |ingredient| Ingredient.find_or_create_by(name: ingredient) }
    recipe.title = params[:recipe][:title]
    recipe.recipe_link = params[:recipe][:recipe_link]
    recipe.image_link = params[:recipe][:image_link]
    recipe.ingredients << ingredients
    recipe.save
    render json: RecipeSerializer.new(recipe)
  end

end

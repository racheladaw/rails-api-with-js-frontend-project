class Ingredient < ApplicationRecord
  has_many :ingredients_recipes, dependent: :delete_all
  has_many :recipes, through: :ingredients_recipes
end

class Recipe < ApplicationRecord
  has_many :ingredients_recipes, dependent: :delete_all
  has_many :ingredients, through: :ingredients_recipes
end

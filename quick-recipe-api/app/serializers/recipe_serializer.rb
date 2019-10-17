class RecipeSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :recipe_link, :image_link, :ingredients
end

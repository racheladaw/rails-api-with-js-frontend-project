class RecipeSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :ingredients
end

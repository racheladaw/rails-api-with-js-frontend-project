class IngredientSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :recipes
end

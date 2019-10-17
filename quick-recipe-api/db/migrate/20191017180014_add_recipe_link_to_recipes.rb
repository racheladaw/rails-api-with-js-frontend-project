class AddRecipeLinkToRecipes < ActiveRecord::Migration[5.2]
  def change
    add_column :recipes, :recipe_link, :string
  end
end

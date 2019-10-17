class AddImageLinkToRecipes < ActiveRecord::Migration[5.2]
  def change
    add_column :recipes, :image_link, :string
  end
end

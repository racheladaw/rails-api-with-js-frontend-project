# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

r1 = Recipe.create(title: "spicy shrimp with cauliflower mash and garlic kale", recipe_link: "https://pinchofyum.com/spicy-shrimp-cauliflower-mash-roasted-kale", image_link: "https://pinchofyum.com/wp-content/uploads/Shrimp-and-Cauliflower-2-2.jpg")

r1.ingredients << [Ingredient.find_or_create_by(name: "olive oil"), Ingredient.find_or_create_by(name: "cauliflower"), Ingredient.find_or_create_by(name: "garlic"), Ingredient.find_or_create_by(name: "milk"), Ingredient.find_or_create_by(name: "vegetable broth"), Ingredient.find_or_create_by(name: "chicken broth"), Ingredient.find_or_create_by(name: "white beans"), Ingredient.find_or_create_by(name: "cornmeal"), Ingredient.find_or_create_by(name: "shredded cheese"), Ingredient.find_or_create_by(name: "bacon fat"), Ingredient.find_or_create_by(name: "kale"), Ingredient.find_or_create_by(name: "shrimp"), Ingredient.find_or_create_by(name: "garlic salt"), Ingredient.find_or_create_by(name: "chili powder"), Ingredient.find_or_create_by(name: "cayenne"), Ingredient.find_or_create_by(name: "black pepper")]

r2 = Recipe.create(title: "baked gnocchi with vodka sauce", recipe_link: "https://pinchofyum.com/ridiculous-baked-gnocchi-with-vodka-sauce", image_link: "https://pinchofyum.com/wp-content/uploads/Baked-Gnocchi.jpg")

r2.ingredients << [Ingredient.find_or_create_by(name: "butter"), Ingredient.find_or_create_by(name: "garlic"), Ingredient.find_or_create_by(name: "tomato paste"), Ingredient.find_or_create_by(name: "vodka"), Ingredient.find_or_create_by(name: "heavy cream"), Ingredient.find_or_create_by(name: "chicken broth"), Ingredient.find_or_create_by(name: "salt"), Ingredient.find_or_create_by(name: "gnocchi"), Ingredient.find_or_create_by(name: "mozzarella cheese balls"), Ingredient.find_or_create_by(name: "parmesan cheese"), Ingredient.find_or_create_by(name: "parsley")]

r3 = Recipe.create(title: "blender lemon pie", recipe_link: "https://pinchofyum.com/blender-lemon-pie", image_link: "https://pinchofyum.com/wp-content/uploads/Blender-Lemon-Pie-2-2.jpg")

r3.ingredients << [Ingredient.find_or_create_by(name: "eggs"), Ingredient.find_or_create_by(name: "butter"), Ingredient.find_or_create_by(name: "lemon"), Ingredient.find_or_create_by(name: "sugar"), Ingredient.find_or_create_by(name: "vanilla"), Ingredient.find_or_create_by(name: "pie crust"), Ingredient.find_or_create_by(name: "powdered sugar")]

r4 = Recipe.create(title: "5-ingredient green curry", recipe_link: "https://pinchofyum.com/green-curry", image_link: "https://pinchofyum.com/wp-content/uploads/Green-Curry-3.jpg")

r4.ingredients << [Ingredient.find_or_create_by(name: "firm tofu"), Ingredient.find_or_create_by(name: "olive oil"), Ingredient.find_or_create_by(name: "salt"), Ingredient.find_or_create_by(name: "sweet potatoes"), Ingredient.find_or_create_by(name: "green curry paste"), Ingredient.find_or_create_by(name: "coconut milk"), Ingredient.find_or_create_by(name: "broccoli")]

r5 = Recipe.create(title: "jerusalem artichoke salad", recipe_link: "https://deliciouslyella.com/recipes/jerusalem-artichoke-salad/", image_link: "https://deliciouslyella.com/wp-content/uploads/2019/07/jerusalem-artichoke-salad-recipe-3-440x610.jpg")

r5.ingredients << [Ingredient.find_or_create_by(name: "jerusalem artichokes"), Ingredient.find_or_create_by(name: "kale"), Ingredient.find_or_create_by(name: "raisins"), Ingredient.find_or_create_by(name: "roasted hazelnuts"), Ingredient.find_or_create_by(name: "olive oil"), Ingredient.find_or_create_by(name: "maple syrup"), Ingredient.find_or_create_by(name: "salt")]

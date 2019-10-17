const RECIPES_URL = "http://localhost:3000/recipes"

class Recipe {
  constructor(title, imageLink, recipeLink, ingredients) {
    this.title = title;
    this.imageLink = imageLink;
    this.recipeLink = recipeLink;
    this.ingredients = ingredients;
  }

  createRecipeCard() {
    const cardContainer = document.getElementById('recipe-card-container')
    const card = document.createElement('div')
    card.className = "card"
    const title = document.createElement('h1')
    title.innerHTML = this.title
    card.appendChild(title)
    const img = document.createElement('img')
    img.src = this.imageLink
    card.appendChild(img)
    const link = document.createElement('a')
    link.src = this.recipeLink
    card.appendChild(link)
    const ingHeader = document.createElement('h3')
    ingHeader.innerHTML = "Ingredients:"
    card.appendChild(ingHeader)
    const ul = document.createElement('ul')
    for (ingredient of this.ingredients) {
      let li = document.createElement('li')
      li.innerHTML = ingredient
      ul.appendChild(li)
    }
    card.appendChild(ul)
    cardContainer.appendChild(card)
  }

}

function getRecipes() {
  fetch(RECIPES_URL).then(response => response.json()).then(json => createRecipes(json.data))
}

function createRecipes(recipes) {
  const recipeArray = []
  for (recipe of recipes) {
    let ingredientArray = [];
    for (ingredient of recipe.attributes.ingredients) {
      ingredientArray.push(ingredient.name)
    }
    recipeArray.push(new Recipe(recipe.attributes.title, recipe.attributes.image_link, recipe.attributes.recipe_link, ingredientArray))
  }
  return addRecipesToDom(recipeArray)
}

function addRecipesToDom(recipeArray) {
  for (recipe of recipeArray) {
    console.log(recipe)
    recipe.createRecipeCard()
  }
  console.log("finished")
}

getRecipes()

// const recipes = getRecipes();
// console.log(getRecipes())
// recipes[0].createRecipeCard()

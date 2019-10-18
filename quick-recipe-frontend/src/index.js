const RECIPES_URL = "http://localhost:3000/recipes"
const formSubmit = document.getElementById("form-submit")

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
    const img = document.createElement('img')
    img.src = this.imageLink
    card.appendChild(img)
    const cardInfo = document.createElement('div')
    cardInfo.className = "card-info"
    const title = document.createElement('h1')
    title.innerHTML = this.title
    cardInfo.appendChild(title)
    const ingHeader = document.createElement('h3')
    ingHeader.innerHTML = "Ingredients:"
    cardInfo.appendChild(ingHeader)
    const ul = document.createElement('ul')
    for (ingredient of this.ingredients) {
      let li = document.createElement('li')
      li.innerHTML = ingredient
      ul.appendChild(li)
    }
    cardInfo.appendChild(ul)
    const link = document.createElement('a')
    link.href = this.recipeLink
    link.innerHTML = "View Recipe Here"
    cardInfo.appendChild(link)
    card.appendChild(cardInfo)
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
    recipe.createRecipeCard()
  }
}

document.addEventListener("DOMContentLoaded", function() {
  console.log("loaded")
  getRecipes();
  formSubmit.addEventListener("click", function() {
    event.preventDefault();
    addRecipe();
  })
})


function addRecipe() {
  console.log(event.target.parentElement)
  // const form = event.target.parentElement
}

// const recipes = getRecipes();
// console.log(getRecipes())
// recipes[0].createRecipeCard()

const RECIPES_URL = "http://localhost:3000/recipes"
const formSubmit = document.getElementById("form-submit")
const addRecipeButton = document.getElementById("form-show-button")

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
  addRecipeButton.addEventListener("click", function() {
    toggleForm();
    toggleButton();
  })
})

function toggleForm() {
  const form = formSubmit.parentElement;
  if (form.classList.contains("hidden")) {
    form.classList.remove("hidden");
  } else {
    form.className += " hidden";
  }
}

function toggleButton() {
  if (addRecipeButton.classList.contains("hidden")) {
    addRecipeButton.classList.remove("hidden");
  } else {
    addRecipeButton.className += " hidden";
  }
}


function addRecipe() {
  // console.log(event.target.parentElement)
  const form = event.target.parentElement
  // console.log(form[3].value.split(' '))
  const ingredients = form[3].value.split(', ')
  const recipe = new Recipe(form[0].value, form[1].value, form[2].value, ingredients)
  const configurationObject = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({
      "title": form[0].value,
      "image_link": form[1].value,
      "recipe_link": form[2].value,
      "ingredients": ingredients
    })
  };
  fetch(RECIPES_URL, configurationObject)
    .then(response => response.json())
    .then(function(json) {
      recipe.createRecipeCard();
      toggleButton();
      toggleForm();
    })
    .catch(error => console.log("Error: " + error))

  // console.log(recipe)
}

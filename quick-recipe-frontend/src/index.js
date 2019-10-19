const RECIPES_URL = "http://localhost:3000/recipes"
const INGREDIENTS_URL = "http://localhost:3000/ingredients"
const formSubmit = document.getElementById("form-submit")
const formButtons = document.getElementById("form-show-buttons")
const addRecipeButton = document.getElementById("add-recipe")
const dropDownButton = document.getElementById("filter-button")
const ingredientDropDown = document.getElementById("filter-dropdown")
const cardContainer = document.getElementById('recipe-card-container')

class Recipe {
  constructor(title, imageLink, recipeLink, ingredients) {
    this.title = title;
    this.imageLink = imageLink;
    this.recipeLink = recipeLink;
    this.ingredients = ingredients;
  }

  createRecipeCard() {
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
  console.log("DOMloaded")
  getRecipes();
  formSubmit.addEventListener("click", function() {
    event.preventDefault();
    addRecipe();
  })
  addRecipeButton.addEventListener("click", function() {
    toggleForm();
    toggleButtons();
  })
  dropDownButton.addEventListener("click", function() {
    toggleDropDown();
    toggleButtons();
  })
  ingredientDropDown.addEventListener("change", function() {
    getRandomRecipeByIngredient();
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

function clearRecipes() {
  cardContainer.innerHTML = ""
}

function toggleDropDown() {
  const dropDown = document.getElementById("filter-drop-down")
  if (dropDown.classList.contains("hidden")) {
    dropDown.classList.remove("hidden");
  } else {
    dropDown.className += " hidden"
  }
  getIngredients();
}

function getIngredients() {
  fetch(INGREDIENTS_URL).then(response => response.json()).then(json => populateIngredientDropDown(json.data))
}

function populateIngredientDropDown(data) {
  console.log(data)
  for (ingredient of data) {
    let option = document.createElement("option")
    option.value = ingredient.attributes.name
    option.innerHTML = ingredient.attributes.name
    ingredientDropDown.appendChild(option)
  }
}

function toggleButtons() {
  if (formButtons.classList.contains("hidden")) {
    formButtons.classList.remove("hidden");
  } else {
    formButtons.className += " hidden";
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
      toggleButtons();
      toggleForm();
    })
    .catch(error => console.log("Error: " + error))

  // console.log(recipe)
}

function getRandomRecipeByIngredient() {
  clearRecipes();
  const ingredient = event.target.value
  console.log(ingredient)
  // let url = new URL(RECIPE_URL)
  // const params = {ingredient_name: ingredient}
  // url.search = new URLSearchParams(params)
  // console.log(url)
  fetch(RECIPES_URL + `/${ingredient}`).then(response => response.json()).then(json => loadRandomRecipe(json.data.attributes))
    // params = {lat:35.696233, long:139.570431}
    // Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))
    // fetch(url).then(/* … */)
  // fetch(JOIN_TABLE_URL).then(response => response.json()).then(json => console.log(json))
}

function loadRandomRecipe(recipe) {
  let ingredientArray = [];
  for (ingredient of recipe.ingredients) {
    ingredientArray.push(ingredient.name)
  }
  const r = new Recipe(recipe.title, recipe.image_link, recipe.recipe_link, ingredientArray)
  r.createRecipeCard();
}

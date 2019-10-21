const app = new App()

// const RECIPES_URL = "http://localhost:3000/recipes"
// const INGREDIENTS_URL = "http://localhost:3000/ingredients"
// const formSubmit = document.getElementById("form-submit")
// const formButtons = document.getElementById("form-show-buttons")
// const addRecipeButton = document.getElementById("add-recipe")
// const dropDownButton = document.getElementById("filter-button")
// const ingredientDropDown = document.getElementById("filter-dropdown")
// const cardContainer = document.getElementById('recipe-card-container')
//
// class Recipe {
//   constructor(title, imageLink, recipeLink, ingredients) {
//     this.title = title;
//     this.imageLink = imageLink;
//     this.recipeLink = recipeLink;
//     this.ingredients = ingredients;
//   }
// ^ done
//
//   createRecipeCard() {
//     const card = document.createElement('div')
//     card.className = "card"
//     const img = document.createElement('img')
//     img.src = this.imageLink
//     card.appendChild(img)
//     const cardInfo = document.createElement('div')
//     cardInfo.className = "card-info"
//     const title = document.createElement('h1')
//     title.innerHTML = this.title
//     cardInfo.appendChild(title)
//     const ingHeader = document.createElement('h3')
//     ingHeader.innerHTML = "Ingredients:"
//     cardInfo.appendChild(ingHeader)
//     const ul = document.createElement('ul')
//     for (let ingredient of this.ingredients) {
//       let li = document.createElement('li')
//       li.innerHTML = ingredient
//       ul.appendChild(li)
//     }
//     cardInfo.appendChild(ul)
//     const link = document.createElement('a')
//     link.href = this.recipeLink
//     link.innerHTML = "View Recipe Here"
//     cardInfo.appendChild(link)
//     card.appendChild(cardInfo)
//     cardContainer.appendChild(card)
//   }
// ^ done
//
//   static getRecipes() {
//     fetch(RECIPES_URL).then(response => response.json()).then(json => Recipe.createRecipes(json.data))
//   }
// ^ done
//
//   static createRecipes(recipes) {
//     const recipeArray = []
//     for (let recipe of recipes) {
//       let ingredientArray = [];
//       for (let ingredient of recipe.attributes.ingredients) {
//         ingredientArray.push(ingredient.name)
//       }
//       recipeArray.push(new Recipe(recipe.attributes.title, recipe.attributes.image_link, recipe.attributes.recipe_link, ingredientArray))
//     }
//     return Recipe.addRecipesToDom(recipeArray)
//   }
// ^ done
//
//   static addRecipesToDom(recipeArray) {
//     for (let recipe of recipeArray) {
//       recipe.createRecipeCard()
//     }
//   }
// ^ done
//
//   static addRecipe() {
//     const form = event.target.parentElement
//     const ingredients = form[3].value.split(', ')
//     const recipe = new Recipe(form[0].value, form[1].value, form[2].value, ingredients)
//     const configurationObject = {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         "Accept": "application/json"
//       },
//       body: JSON.stringify({
//         "title": form[0].value,
//         "image_link": form[1].value,
//         "recipe_link": form[2].value,
//         "ingredients": ingredients
//       })
//     };
//     fetch(RECIPES_URL, configurationObject)
//       .then(response => response.json())
//       .then(function(json) {
//         recipe.createRecipeCard();
//         toggleButtons();
//         toggleForm();
//       })
//       .catch(error => console.log("Error: " + error))
//
//   }
//
//   static clearRecipes() {
//     cardContainer.innerHTML = ""
//   }
//
//   static getRandomRecipeByIngredient() {
//     Recipe.clearRecipes();
//     const ingredient = event.target.value
//     fetch(RECIPES_URL + `/${ingredient}`).then(response => response.json()).then(json => Recipe.loadRandomRecipe(json.data.attributes))
//   }
//
//   static loadRandomRecipe(recipe) {
//     let ingredientArray = [];
//     for (let ingredient of recipe.ingredients) {
//       ingredientArray.push(ingredient.name)
//     }
//     const r = new Recipe(recipe.title, recipe.image_link, recipe.recipe_link, ingredientArray)
//     r.createRecipeCard();
//   }
//
// }
//
// class Ingredient {
//
//   static getIngredients() {
//     fetch(INGREDIENTS_URL).then(response => response.json()).then(json => Ingredient.populateIngredientDropDown(json.data))
//   }
//
//   static populateIngredientDropDown(data) {
//     data.sort((a, b) => (a.attributes.name > b.attributes.name) ? 1 : -1)
//     for (let ingredient of data) {
//       let option = document.createElement("option")
//       option.value = ingredient.attributes.name
//       option.innerHTML = ingredient.attributes.name
//       ingredientDropDown.appendChild(option)
//     }
//   }
//
// }
//
// document.addEventListener("DOMContentLoaded", function() {
//   console.log("DOMloaded")
//   Recipe.getRecipes();
//   formSubmit.addEventListener("click", function() {
//     event.preventDefault();
//     Recipe.addRecipe();
//   })
//   addRecipeButton.addEventListener("click", function() {
//     toggleForm();
//     toggleButtons();
//   })
//   dropDownButton.addEventListener("click", function() {
//     toggleDropDown();
//     toggleButtons();
//   })
//   ingredientDropDown.addEventListener("change", function() {
//     Recipe.getRandomRecipeByIngredient();
//   })
// })
//
// function toggleForm() {
//   const form = formSubmit.parentElement;
//   if (form.classList.contains("hidden")) {
//     form.classList.remove("hidden");
//   } else {
//     form.className += " hidden";
//   }
// }
//
// function toggleDropDown() {
//   const dropDown = document.getElementById("filter-drop-down")
//   if (dropDown.classList.contains("hidden")) {
//     dropDown.classList.remove("hidden");
//   } else {
//     dropDown.className += " hidden"
//   }
//   Ingredient.getIngredients();
// }
//
// function toggleButtons() {
//   if (formButtons.classList.contains("hidden")) {
//     formButtons.classList.remove("hidden");
//   } else {
//     formButtons.className += " hidden";
//   }
// }

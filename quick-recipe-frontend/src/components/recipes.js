class Recipes {
  constructor() {
    this.recipes = [];
    this.adapter = new RecipesAdapter();
    this.formSubmit = document.getElementById("form-submit");
    this.formButtons = document.getElementById("form-show-buttons");
    this.addRecipeButton = document.getElementById("add-recipe");
    this.dropDownButton = document.getElementById("filter-button");
    this.ingredientDropDown = document.getElementById("filter-dropdown");
    this.cardContainer = document.getElementById('recipe-card-container');
    this.bindEventListeners();
    this.fetchAndLoadRecipes();
  }

  fetchAndLoadRecipes() {
    this.adapter.getRecipes().then(recipes => this.createRecipes(recipes)).then(() => this.addRecipesToDom())
  }

  bindEventListeners() {
    console.log(this)
    this.formSubmit.addEventListener("click", function() {
      event.preventDefault();
      this.addRecipe();
    }.bind(this))
    this.addRecipeButton.addEventListener("click", function() {
      // console.log(this)
      this.toggleForm();
      this.toggleButtons();
    }.bind(this))
    this.dropDownButton.addEventListener("click", function() {
      this.toggleDropDown();
      this.toggleButtons();
    }.bind(this))
    this.ingredientDropDown.addEventListener("change", function() {
      this.getAndLoadRandomRecipeByIngredient();
    }.bind(this))
  }

  createRecipes(recipes) {
    for (let recipe of recipes) {
      let ingredientArray = [];
      for (let ingredient of recipe.attributes.ingredients) {
        ingredientArray.push(ingredient.name)
      }
      this.recipes.push(new Recipe(recipe.attributes.title, recipe.attributes.image_link, recipe.attributes.recipe_link, ingredientArray))
    }
  }

  addRecipesToDom() {
    for (let recipe of this.recipes) {
      recipe.createRecipeCard()
    }
  }

  addRecipe() {
    const form = event.target.parentElement
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
    this.adapter.postRecipeToApi(configurationObject).then(function(json) {
      recipe.createRecipeCard();
      this.toggleButtons();
      this.toggleForm();
    }.bind(this))
  }

  toggleForm() {
    const form = this.formSubmit.parentElement;
    if (form.classList.contains("hidden")) {
      form.classList.remove("hidden");
    } else {
      form.className += " hidden";
    }
  }

  toggleButtons() {
    if (this.formButtons.classList.contains("hidden")) {
      this.formButtons.classList.remove("hidden");
    } else {
      this.formButtons.className += " hidden";
    }
  }

  toggleDropDown() {
    const dropDown = document.getElementById("filter-drop-down")
    if (dropDown.classList.contains("hidden")) {
      dropDown.classList.remove("hidden");
    } else {
      dropDown.className += " hidden"
    }
    new Ingredients()
  }

  clearRecipes() {
    this.cardContainer.innerHTML = "";
  }

  getAndLoadRandomRecipeByIngredient() {
    this.clearRecipes();
    const ingredient = event.target.value
    this.adapter.getRecipeByIngredient(ingredient).then(json => this.loadRandomRecipe(json.data.attributes))
  }

  loadRandomRecipe(recipe) {
    let ingredientArray = [];
    for (let ingredient of recipe.ingredients) {
      ingredientArray.push(ingredient.name)
    }
    const r = new Recipe(recipe.title, recipe.image_link, recipe.recipe_link, ingredientArray)
    r.createRecipeCard();
  }
}

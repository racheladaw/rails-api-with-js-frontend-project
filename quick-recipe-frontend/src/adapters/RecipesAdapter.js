class RecipesAdapter {
  constructor() {
    this.baseURL = "http://localhost:3000/recipes"
  }

  getRecipes() {
    return fetch(this.baseURL).then(response => response.json()).then(json => json.data)
  }

  postRecipeToApi(configurationObject) {
    return fetch(this.baseURL, configurationObject)
      .then(response => response.json())
      .catch(error => console.log("Error: " + error))
  }

  getRecipeByIngredient(ingredient) {
    return fetch(this.baseURL + `/${ingredient}`).then(response => response.json())
  }
}

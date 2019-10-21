class Ingredients {
  constructor() {
    this.ingredients = [];
    this.adapter = new IngredientsAdapter();
    this.ingredientDropDown = document.getElementById("filter-dropdown");
    this.fetchAndPopulateDropDown();
  }

  fetchAndPopulateDropDown() {
    this.adapter.getIngredients().then(json => this.populateIngredientDropDown(json))
  }

  populateIngredientDropDown(data) {
    data.sort((a, b) => (a.attributes.name > b.attributes.name) ? 1 : -1)
    for (let ingredient of data) {
      let option = document.createElement("option")
      option.value = ingredient.attributes.name
      option.innerHTML = ingredient.attributes.name
      this.ingredientDropDown.appendChild(option)
    }
  }
}

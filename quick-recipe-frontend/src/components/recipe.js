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
    for (let ingredient of this.ingredients) {
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
    document.getElementById('recipe-card-container').appendChild(card)
  }
}

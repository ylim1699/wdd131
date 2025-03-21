import recipes from "./recipes.mjs";

function getRandomNumber(num) {
  return Math.floor(Math.random() * num);
}

function getRandomListEntry(list) {
  const listLength = list.length;
  const randomNum = getRandomNumber(listLength);
  return list[randomNum];
}

function recipeTemplate(recipe) {
  return ` 
        <img src="${recipe.image}" alt="image of ${recipe.name}">

        <figcaption class="recipe-info">
            <div class="tag">
                ${tagsTemplate(recipe.tags)}
            </div>
            <div class="recipe-name">
                <p>${recipe.name}</p>
            </div>
            ${ratingTemplate(recipe.rating)}
            <div class="recipe-description hide">
                <p>${recipe.description}</p>
            </div>
        </figcaption>
        `;
}

function tagsTemplate(tags = []) {
  return tags.map((tag) => `<span>${tag}</span>`).join(", ");
}

function ratingTemplate(rating) {
  // begin building an html string using the ratings HTML written earlier as a model.
  let html = `<span
	class="rating"
	role="img"
	aria-label="Rating: ${rating} out of 5 stars"
>`;
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      html += `<span aria-hidden="false" class="icon-star">⭐</span>`;
    } else {
      html += `<span aria-hidden="true" class="icon-star-empty">☆</span>`;
    }
  }
  html += `</span>`;
  return html;
}

function renderRecipes(recipeList) {
  // get the element we will output the recipes into
  const outputElement = document.querySelector(".recipe-container");
  // use the recipeTemplate function to transform our recipe objects into recipe HTML strings
  const html = recipeList.map((recipe) => recipeTemplate(recipe)).join("");
  // Set the HTML strings as the innerHTML of our output element.
  outputElement.innerHTML = html;
}

function init() {
  // get a random recipe
  const recipe = getRandomListEntry(recipes);
  // render the recipe with renderRecipes.
  renderRecipes([recipe]);
}
init();

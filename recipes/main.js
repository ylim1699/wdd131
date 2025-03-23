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

function filter(query) {
  return recipes.filter(recipe => {
    return (
      recipe.name.toLowerCase().includes(query) ||
      recipe.discription.toLowerCase().includes(query) ||
      recipe.tags?.some(tag => tag.toLowerCase().includes(query)) ||
      recipe.ingredients?.some(ingredient => ingredient.toLowerCase().includes(query))
    );
  })
  .sort((a, b) => a.name.localeCompare(b.name));
}

function searchHandler(event) {
  event.preventDefault()
	// get the search input
  const searchInput = event.target.querySelector("input[type='searchBar']");
  // convert the value in the input to lowercase
  const query = searchInput.value.trim().toLowerCase();
  // use the filter function to filter our recipes
  const filteredRecipe = filter(query);
  // render the filtered list
}

document.querySelector("searchBar").addEventListener("submit", searchHandler);

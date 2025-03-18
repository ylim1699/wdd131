import recipes from './recipes.mjs';

function getRandomNumber(num) {
    return Math.floor(Math.random()*num);
}

function getRandomListEntry(list) {
    const listLength = list.length;
    const randomNum = getRandomNumber(listLength);
    return list[randomNum];
}

console.log(getRandomListEntry(recipes));

function listEntryTemplate(recipe) {
    return` <figure class="recipe-container">
                <img src="${recipies.image}" alt="image of ${recipes.name}">
                
                <figcaption class="recipe-info">
                    <ul class="tag">
                        <li>${recipe.tag}</li>
                    </ul>
                    <div class="recipe-name">
                        <p>${recipe.name}</p>
                    </div>
                    <span 
                        class="rating" 
                        role="img" 
                        aria-label="Rating: ${recipes.rating} out of 5 stars"
                    >
                        <span aria-hidden="true" class="icon-star">⭐</span>
                        <span aria-hidden="true" class="icon-star">⭐</span>
                        <span aria-hidden="true" class="icon-star">⭐</span>
                        <span aria-hidden="true" class="icon-star-empty">⭐</span>
                        <span aria-hidden="true" class="icon-star-empty">☆</span>
                    </span>
                    <div class="recipe-description hide">
                        <p>${recipes.description}</p>
                    </div>
                </figcaption>
            </figure> `
}




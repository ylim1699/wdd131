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
                <img src="./images/images/apple-crisp.jpg" alt="apple-crisp image">
                
                <figcaption class="recipe-info">
                    <div class="tag">
                        <p>${recipe.tag}</p>
                    </div>
                    <div class="recipe-name">
                        <p>${recipe.name}</p>
                    </div>
                    <span class="rating" role="img" aria-label="Rating: 4 out of 5 stars">
                        <span aria-hidden="true" class="icon-star">⭐</span>
                        <span aria-hidden="true" class="icon-star">⭐</span>
                        <span aria-hidden="true" class="icon-star">⭐</span>
                        <span aria-hidden="true" class="icon-star-empty">⭐</span>
                        <span aria-hidden="true" class="icon-star-empty">☆</span>
                    </span>
                    <div class="recipe-description hide">
                        <p>This apple crisp recipe is a simple yet delicious fall dessert
                            that's great served warm with vanilla ice cream.
                        </p>
                    </div>
                </figcaption>
            </figure> `
}




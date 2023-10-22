const urlParams = new URLSearchParams(window.location.search);
const letter = urlParams.get('letter');
console.log(letter);
const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`;
console.log(url);
if (letter) {
    fetch(url)
.then(response => response.json())
.then(data => {
    console.log(data);
    const drinks = data.drinks;
    console.log(drinks);
    const searchResults = document.querySelector('.search-results');
    drinks.forEach(drink => {
        const button = document.createElement('button');
        button.innerText = 'Details'.toUpperCase();
        button.addEventListener('click', () => {
            window.location.href = `./details.html?id=${drink.idDrink}`;
        });
        const paragraph = document.createElement("p");
         paragraph.className = "result";
            paragraph.innerText = drink.strCategory;
        button.classList.add('result');
        const drinkDiv = document.createElement('div');
        drinkDiv.classList.add('result');
        const drinkName = document.createElement('h1');
        drinkName.classList.add('result');
        drinkName.innerText = drink.strDrink;
        const drinkImage = document.createElement('img');
        drinkImage.classList.add('result');
        drinkImage.src = drink.strDrinkThumb;
        drinkDiv.appendChild(drinkName);
        drinkDiv.appendChild(drinkImage);
        searchResults.appendChild(drinkDiv);
        drinkDiv.appendChild(paragraph);
        drinkDiv.appendChild(button);
    });
});           
}
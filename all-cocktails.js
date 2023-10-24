const urlParams = new URLSearchParams(window.location.search);
const letter = urlParams.get('letter');

if (letter) {
    const letters = document.querySelectorAll('.list');
    letters.forEach(item => {
        if (item.innerText === letter) {
            item.classList.add('selected');
        }
    });
}
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
            window.location.href = `./details.html?id=${drink.idDrink}&isCocktailList=${true}`;
        });
        const paragraph = document.createElement("p");
         paragraph.className = "result";
            paragraph.innerText = drink.strCategory;
        button.classList.add('result');
        const drinkDiv = document.createElement('div');
        drinkDiv.classList.add('result');
        const top = document.createElement("div");
        top.className = "result-top";
        const bottom = document.createElement("div");
        bottom.className = "result-bottom";
        const drinkName = document.createElement('h1');
        drinkName.classList.add('result');
        drinkName.innerText = drink.strDrink;
        const drinkImage = document.createElement('img');
        drinkImage.classList.add('result');
        drinkImage.src = drink.strDrinkThumb;
        searchResults.appendChild(drinkDiv);
        drinkDiv.appendChild(top);
        drinkDiv.appendChild(bottom);
        top.appendChild(drinkImage);
        bottom.appendChild(drinkName);
        bottom.appendChild(paragraph);
        bottom.appendChild(button);
    });
});           
}
function openMenu() {
    const menu = document.querySelectorAll(".hamburger-line");
    menu.forEach((item) => item.classList.toggle("open"));
    const nav = document.querySelector(".menu-mobile");
    nav.classList.toggle("open");
}

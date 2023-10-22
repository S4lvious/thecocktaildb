let url = new URLSearchParams(window.location.search);
let id = url.get("id");

const urlDetails = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

fetch(urlDetails + id).then((response) => {
    response.json().then((data) => {
        console.log(data);

        const cocktailImage = document.querySelector(".cocktail-image");
        const img = document.createElement("img");
        img.src = data.drinks[0].strDrinkThumb;
        img.className = "cocktail-image-img";
        cocktailImage.appendChild(img);

        const cocktailName = document.querySelector(".cocktail-name");
        const name = document.createElement("h1");
        name.innerText = data.drinks[0].strDrink;
        cocktailName.appendChild(name);

        const cocktailIngredients = document.querySelector(".cocktail-ingredients");
        const ingredients = document.createElement("p");
        if (data.drinks[0].strIngredient1 !== null)
            ingredients.innerText = data.drinks[0].strIngredient1;
        if (data.drinks[0].strIngredient2 !== null)
            ingredients.innerText += ", " + data.drinks[0].strIngredient2;
        if (data.drinks[0].strIngredient3 !== null)
            ingredients.innerText += ", " + data.drinks[0].strIngredient3;
        if (data.drinks[0].strIngredient4 !== null)
            ingredients.innerText += ", " + data.drinks[0].strIngredient4;
        if (data.drinks[0].strIngredient5 !== null)
            ingredients.innerText += ", " + data.drinks[0].strIngredient5;
        if (data.drinks[0].strIngredient6 !== null)
            ingredients.innerText += ", " + data.drinks[0].strIngredient6;
        if (data.drinks[0].strIngredient7 !== null)
            ingredients.innerText += ", " + data.drinks[0].strIngredient7;
        if (data.drinks[0].strIngredient8 !== null) 
            ingredients.innerText += ", " + data.drinks[0].strIngredient8;
        if (data.drinks[0].strIngredient9 !== null)
            ingredients.innerText += ", " + data.drinks[0].strIngredient9;
        if (data.drinks[0].strIngredient10 !== null)
            ingredients.innerText += ", " + data.drinks[0].strIngredient10;
        if (data.drinks[0].strIngredient11 !== null)
            ingredients.innerText += ", " + data.drinks[0].strIngredient11;
        if (data.drinks[0].strIngredient12 !== null)
            ingredients.innerText += ", " + data.drinks[0].strIngredient12;
        if (data.drinks[0].strIngredient13 !== null)
            ingredients.innerText += ", " + data.drinks[0].strIngredient13;
        if (data.drinks[0].strIngredient14 !== null)
            ingredients.innerText += ", " + data.drinks[0].strIngredient14;
        if (data.drinks[0].strIngredient15 !== null)
            ingredients.innerText += ", " + data.drinks[0].strIngredient15;
        cocktailIngredients.appendChild(ingredients);
        const cocktailInstructions = document.querySelector(".cocktail-instructions");
        const instructions = document.createElement("p");
        instructions.innerText = data.drinks[0].strInstructions;
        cocktailInstructions.appendChild(instructions);
    })
})


function openMenu() {
    const menu = document.querySelectorAll(".hamburger-line");
    menu.forEach((item) => item.classList.toggle("open"));
    const nav = document.querySelector(".menu-mobile");
    nav.classList.toggle("open");
}

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
let cocktail = "";
const body = document.querySelector(".search-results");


function setCocktail(event) {
    cocktail = event.target.value;
}

function cancelResults()  {
    const results = document.querySelectorAll(".result");
        if (results.length > 0) {
            results.forEach((result) => result.remove());
        }
    }

function getCocktailData (event) {
    if(cocktail != "" && event) {
    fetch(url + cocktail).then((response) =>{
        response.json().then((data) =>{
            if(data.drinks.length > 0) {
            const oldResults = document.querySelectorAll(".result");
            if(oldResults.length > 0) {
                for (let i = 0; i<oldResults.length; i++){
                    oldResults[i].remove();
                }

            }
            for(let i = 0; i<data.drinks.length; i++) {
                const resultContainer = document.createElement("div");
                resultContainer.className = "result";
                const titleDrink = document.createElement("h1");
                titleDrink.className = "result";
                const img = document.createElement("img");
                img.className = "result";
                const paragraph = document.createElement("p");
                paragraph.className = "result";
                const button = document.createElement("button");
                button.innerText = "Details".toUpperCase();
                button.addEventListener("click", () => {
                    window.location.href = "details.html?id=" + data.drinks[i].idDrink;
                })
                button.className = "result";
                titleDrink.innerText = data.drinks[i].strDrink;
                paragraph.innerText = data.drinks[i].strCategory;
                img.src = data.drinks[i].strDrinkThumb;
                body.appendChild(resultContainer);
                resultContainer.appendChild(img);
                resultContainer.appendChild(titleDrink);
                resultContainer.appendChild(paragraph);
                resultContainer.appendChild(button);
        
  
            }
        }
        })
    })
}
}

function openMenu() {
    const menu = document.querySelectorAll(".hamburger-line");
    menu.forEach((item) => item.classList.toggle("open"));
    const nav = document.querySelector(".menu-mobile");
    nav.classList.toggle("open");
}

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
let cocktail = "";
const body = document.querySelector("body");


function setCocktail(event) {
    cocktail = event.target.value;
    getCocktailData();
}

const cancelResults = () => {
    const results = document.querySelectorAll(.result);
    results.forEach(result){
        result.remove();
    }
}

function getCocktailData () {
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
                const titleDrink = document.createElement("h1");
                titleDrink.className = "result";
                const img = document.createElement("img");
                img.className = "result";
                const paragraph = document.createElement("p");
                paragraph.className = "result";
                titleDrink.innerText = data.drinks[i].strDrink;
                paragraph.innerText = data.drinks[i].strInstructionsIT;
                img.src = data.drinks[i].strDrinkThumb;
                body.appendChild(titleDrink);
                body.appendChild(paragraph);
                body.appendChild(img);
            }
        }
        })
    })
}

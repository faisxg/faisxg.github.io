const sokfelt = document.getElementById("sokfelt");

async function hentOppskrift() {

    const data = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata");
    const json = await data.json();

    document.getElementById("resultat").innerHTML = "";

    for (let i = 1; i < 4; i++) {
        let ingredienser = document.createElement("p");
        ingredienser.innerText = json.meals[0].strIngredient + i;
        console.log(ingredienser);
    }

    console.table(json);
    console.table(json.meals[0])
}

hentOppskrift()
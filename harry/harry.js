const sokfelt = document.getElementById("sokfelt");
const output = document.getElementById("resultat");

async function hentHarry() {

    const data = await fetch('./harry.json');
    const json = await data.json();

    for (let i = 0; i < json.hogwarts_houses.length; i++) {
        console.log(json.hogwarts_houses[i].house_name);
    }

    for (let j = 0; j < json.hogwarts_houses[0].members.length; j++) {
        console.log(json.hogwarts_houses[0].members[j].bio)
    }

    for (let i = 0; i < json.hogwarts_houses.length; i++) {
        console.log("Medlemmer i " + json.hogwarts_houses[i].house_name + ":")
        for (let j = 0; j < json.hogwarts_houses[i].members.length; j++) {
            console.log(json.hogwarts_houses[i].members[j].bio)
        }
    }

    output.innerHTML = "";

    for (let i = 0; i < json.hogwarts_houses.length; i++) {
        
        const sitat1 = document.createElement("p");
        sitat1.innerHTML = "Medlemmer i " + json.hogwarts_houses[i].house_name + ":";
        output.appendChild(sitat1);
        for (let j = 0; j < json.hogwarts_houses[i].members.length; j++) {
            const sitat2 = document.createElement("p");
            sitat2.innerText = json.hogwarts_houses[i].members[j].bio.full_name;
            output.appendChild(sitat2)
        }
    }
    const skuespiller = document.createElement("p");
    skuespiller.innerText = "Skuespilleren har navnet " + json.hogwarts_houses[0].members[1].bio.actor;
    output.appendChild(skuespiller);

    console.table(json)
}

hentHarry()
const output = document.getElementById("resultat");

async function hentHarry() {

    const data = await fetch('./harry.json');
    const json = await data.json();

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
    console.table(json)
}

hentHarry()
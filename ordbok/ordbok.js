const skjema = document.getElementById("skjema");

skjema.addEventListener("submit", handterskjema);

function handterskjema(event) {
    event.preventDefault();
}

let ord = null;
let output = document.getElementById("output");

skjema.addEventListener("submit", input);

async function input() {
    ord = document.getElementById("ord").value;
    output.innerHTML = "";
    let json = await hentDef();

    for (const ordInfo of json) {
        let meanings = ordInfo.meanings;

        for (let meaning of meanings) {
            const type = document.createElement("p");
            type.innerText = "Type: " + meaning.partOfSpeech;
            output.appendChild(type);

            const def = document.createElement("p");
            def.innerText = "Definisjon: " + meaning.definitions[0].definition;
            output.appendChild(def);
        }
    }
}

async function hentDef() {
    const data = await fetch("https://api.dictionaryapi.dev/api/v2/entries/en/" + ord);
    const res = await data.json();

    if (data.status === 200) {
        return res;
    } else {
        return {
            error: true
        };
    }
}
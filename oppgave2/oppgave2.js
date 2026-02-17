const boktitler = document.getElementById("boktitler");
const output = document.getElementById("output");

async function hentBok() {
    const data = await fetch("./books.json");
    const json = await data.json();

    for (let i = 0; i < json.length; i++) {
        const boknavn = document.createElement("h2");
        boknavn.className = "boktittel";
        
        boknavn.innerText = json[i].name
        boktitler.appendChild(boknavn);

        boknavn.addEventListener("click", function () {
            output.innerHTML = "";

            const beskrivelse = document.createElement("p");
            beskrivelse.innerText = "Utgitt i " + json[i].released + ", og har et antall sider på " + json[i].numberOfPages;
            output.appendChild(beskrivelse);
        })
    }
}

hentBok();
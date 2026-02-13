const output = document.getElementById("output");

async function hentBok() {
    const data = await fetch("./books.json");
    const json = await data.json();

    console.table(json)

    for (let i = 0; i < json.length; i++) {
        console.table(json[i].name);
        const boknavn = document.createElement("p");
        boknavn.innerText = json[i].name + ", Utgitt i " + json[i].released + ", og har et antall sider på " + json[i].numberOfPages;
        output.appendChild(boknavn);
    }
}

hentBok()
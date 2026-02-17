const skjema = document.getElementById("skjema");
const output = document.getElementById("output");

let fornavn = document.getElementById("fornavn");
let rabatt = document.getElementById("rabatt");

let rabattKoder = ["STUDENTRABATT", "2026NYTTÅR", "10MBRUKERE"]

skjema.addEventListener("submit", function (event) {
    event.preventDefault();
    output.innerHTML = "";

    output.innerHTML = "Takk for din registrering, " + fornavn.value + "!";

    if (rabattKoder.includes(rabatt.value)) {
        output.innerHTML = "Takk for din registrering, " + fornavn.value + "!" + " Du har oppgitt en rabattkode og får en rabattert pris";
    }
})

const skjema = document.getElementById("skjema");
const output = document.getElementById("output");

let fornavn = document.getElementById("fornavn");
let rabatt = document.getElementById("rabatt");


skjema.addEventListener("submit", function (event) {
    event.preventDefault();
    output.innerHTML = "";

    output.innerHTML = "Takk for din registrering, " + fornavn.value + "!";
    console.log(fornavn.value)
    console.log(rabatt.value)

    if (rabatt.value !== "") {
        output.innerHTML = "Takk for din registrering, " + fornavn.value + "!" + " Du har oppgitt en rabattkode og får en rabattert pris";
    }
})

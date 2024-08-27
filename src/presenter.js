import generarBisiesto from "./bisiesto.js";

const anioInput = document.querySelector("#anio");
const form = document.querySelector("#bisiesto-form");
const resultadoDiv = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const anio = Number.parseInt(anioInput.value);

    resultadoDiv.innerHTML = "<p>" + generarBisiesto(anio) + "</p>";
});

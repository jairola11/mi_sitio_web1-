let lupamovil = document.getElementById("lupamovil");
let buscadorcell = document.getElementById("buscadorcell");
let xSalid = document.getElementById("xSalid");
let buscador = document.querySelector(".buscador");
let tiempoDemora = 10000;

lupamovil.addEventListener("click", function() {
    buscadorcell.classList.add("seekerCell-hidden");

    buscadorcell.classList.remove("buscador-movil");
    
    setTimeout(function() {
        buscador.classList.toggle("expandido");
    }, tiempoDemora);
});

xSalid.addEventListener("click", function() {
    buscadorcell.classList.remove("seekerCell-hidden");
    buscadorcell.classList.add("buscador-movil");
});

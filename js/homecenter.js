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

containerXAnna = document.getElementById('containerXAnna');
containerAna = document.getElementById('containerAna');
containerChat = document.getElementById('containerChat');
containerChatAll = document.getElementById('containerChatAll');


containerAna.addEventListener("click",function(){
    containerChat.style.display = 'none';
    containerXAnna.style.display = 'flex';
    containerChatAll.style.display = 'block';
    containerXAnna.addEventListener("click",function(){
        containerXAnna.style.display = 'none';
        containerChat.style.display = 'flex';
        containerChatAll.style.display = 'none';
    })
})
document.addEventListener("DOMContentLoaded", function() {
    const closeIcon = document.getElementById('closeIcon');
    const chatContainer = document.querySelector('.form-ana');

    closeIcon.addEventListener('click', () => {
        chatContainer.style.display = 'none';
    });
});
let lupamovil = document.getElementById("lupamovil");
let buscadorcell = document.getElementById("buscadorcell");
let xSalid = document.getElementById("xSalid");
let buscador = document.querySelector(".buscador");
let tiempoDemora = 10000;

let iconArrowLeft = document.getElementById("iconArrowLeft");
let iconArrowRight = document.getElementById("iconArrowRight");
let idSlider = document.getElementById("idSlider");
let boxBtn1 = document.getElementById("boxBtn1");
let boxBtn2 = document.getElementById("boxBtn2");
let boxBtn3 = document.getElementById("boxBtn3");
let boxBtn4 = document.getElementById("boxBtn4");

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
let exitStyle = document.getElementById("exitStyle");
let formAna = document.getElementById("formAna");
let avatarAna = document.getElementById("avatarAna");

let isFormVisible = true;

exitStyle.addEventListener("click", function () {
    if (isFormVisible) {
        formAna.style.display = "none";
        avatarAna.style.display = "flex";
        isFormVisible = false;
    } else {
        formAna.style.display = "grid";
        avatarAna.style.display = "none";
        isFormVisible = true;
    }
});

avatarAna.addEventListener("click", function () {
    if (isFormVisible) {
        formAna.style.display = "none";
        avatarAna.style.display = "flex";
        isFormVisible = false;
    } else {
        formAna.style.display = "grid";
        avatarAna.style.display = "none";
        isFormVisible = true;
    }
});





iconArrowLeft.addEventListener("click", function() {
    if (idSlider.classList.contains("slider-view-2")) {
        idSlider.classList.add("slider-view-1");
        idSlider.classList.remove("slider-view-2");
        iconArrowRight.style.display = "flex";
        iconArrowLeft.style.display = "none";
        boxBtn2.classList.remove("btn-select");
        boxBtn1.classList.add("btn-select");
    }
    else if (idSlider.classList.contains("slider-view-3")) {
        idSlider.classList.add("slider-view-2");
        idSlider.classList.remove("slider-view-3");
        iconArrowRight.style.display = "flex";
        boxBtn2.classList.add("btn-select");
        boxBtn3.classList.remove("btn-select");
    }
    else if (idSlider.classList.contains("slider-view-4")) {
        idSlider.classList.add("slider-view-3");
        idSlider.classList.remove("slider-view-4");
        iconArrowRight.style.display = "flex";
        boxBtn4.classList.remove("btn-select");
        boxBtn3.classList.add("btn-select");
    }
});


iconArrowRight.addEventListener("click", function() {
    if (idSlider.classList.contains("slider-view-1")) {
        idSlider.classList.add("slider-view-2");
        idSlider.classList.remove("slider-view-1");
        boxBtn1.classList.remove("btn-select");
        boxBtn2.classList.add("btn-select");
        iconArrowLeft.style.display = "flex"; 
    }
    else if (idSlider.classList.contains("slider-view-2")) {
        idSlider.classList.add("slider-view-3");
        idSlider.classList.remove("slider-view-2");
        boxBtn2.classList.remove("btn-select");
        boxBtn3.classList.add("btn-select");
    }
    else if (idSlider.classList.contains("slider-view-3")) {
        idSlider.classList.add("slider-view-4");
        idSlider.classList.remove("slider-view-3");
        boxBtn3.classList.remove("btn-select");
        boxBtn4.classList.add("btn-select");
        iconArrowRight.style.display = "none";
    }
});
lupa.addEventListener("click", function() {
    containerMobile.style.display = 'none'; 
    search.style.display = 'flex'; 
    xHidden.addEventListener("click",function(){
        search.style.display = 'none';
        containerMobile.style.display = 'flex'; 
    });
});
// Obtener las referencias a los elementos del DOM
var slides = document.querySelectorAll(".slide");
var currentIndex = 0;

// Función para cambiar la imagen actual y activar el slide correspondiente
function changeSlide() {
    // Ocultar todos los slides
    for (var i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
    }

    // Mostrar el slide actual
    slides[currentIndex].classList.add("active");
}

// Función para avanzar al siguiente slide
function nextSlide() {
    currentIndex++;
    if (currentIndex >= slides.length) {
        currentIndex = 0;
    }
    changeSlide();
}

// Cambiar al siguiente slide cada 3 segundos (3000 ms)
setInterval(nextSlide, 3000);

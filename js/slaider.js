var images = [
    "img/img_wed/supra32.webp",
    "/img/img_wed/garaje.webp",
    "img/img_wed/toyota123.webp"
];
var currentIndex = 0;
var carouselImage = document.querySelector(".img-toyota");
var arrowLeft = document.querySelector(".arrow-left");
var arrowRight = document.querySelector(".arrow-right");

arrowLeft.addEventListener("click", function() {
    changeImage(-1);
});

arrowRight.addEventListener("click", function() {
    changeImage(1);
});

function changeImage(direction) {
    currentIndex += direction;
    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    } else if (currentIndex >= images.length) {
        currentIndex = 0;
    }
    carouselImage.classList.add("fade-out");
    setTimeout(function() {
        carouselImage.src = images[currentIndex];
        carouselImage.classList.remove("fade-out");
    }, 500);
}
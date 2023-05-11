// var images = [
//     "img/img_wed/supra32.webp",
//     "/img/img_wed/garaje.webp",
//     "img/img_wed/toyota123.webp"
// ];
// var currentIndex = 0;
// var carouselImage = document.querySelector(".img-toyota");
// var arrowLeft = document.querySelector(".arrow-left");
// var arrowRight = document.querySelector(".arrow-right");

// arrowLeft.addEventListener("click", function() {
//     changeImage(-1);
// });

// arrowRight.addEventListener("click", function() {
//     changeImage(1);
// });

// function changeImage(direction) {
//     currentIndex += direction;
//     if (currentIndex < 0) {
//         currentIndex = images.length - 1;
//     } else if (currentIndex >= images.length) {
//         currentIndex = 0;
//     }
//     carouselImage.classList.add("fade-out");
//     setTimeout(function() {
//         carouselImage.src = images[currentIndex];
//         carouselImage.classList.remove("fade-out");
//     }, 500);
// }
const slider = document.querySelector('#slider1');
let sliderSection = document.querySelectorAll('.slider-section');
let sliderSectionLast = sliderSection[sliderSection.length -1];
const arrowLeft = document.querySelector('#arrowLeft');
const arrowRight = document.querySelector('#arrowRight');

slider.insertAdjacentElement('afterbegin', sliderSectionLast);

function moveRight(){
    let sliderSectionFirst = document.querySelectorAll('.slider-section')[0];
    slider.style.marginLeft = '-200%';
    slider.style.transition = 'all 1s';
    setTimeout(function(){
        slider.style.transition = 'none';
        slider.insertAdjacentElement('beforeend', sliderSectionFirst);
        slider.style.marginLeft = '-100%';
    }, 1000
);
}


function moveLeft(){
let sliderSection = document.querySelectorAll('.slider-section');
let sliderSectionLast = sliderSection[sliderSection.length -1];
slider.style.marginLeft = '0';
slider.style.transition = 'all 1s';
setTimeout(function(){
    slider.style.transition = 'none';
    slider.insertAdjacentElement('afterbegin', sliderSectionLast);
    slider.style.marginLeft = '-100%';
}, 1000
);
}




arrowRight.addEventListener("click", function(){
moveRight();
})
arrowLeft.addEventListener("click", function(){
moveLeft();
})


setInterval(function(){
moveRight();
}, 5000
);
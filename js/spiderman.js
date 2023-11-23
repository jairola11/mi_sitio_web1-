let spiderman = document.getElementById('showSpiderman');
let input = document.querySelector('input');
let position = 5;

let sonido = new Audio("/audio/ringtones-spiderman3.mp3")
function sonidoSpider() {
  sonido.play()
}

input.addEventListener('keyup', (e) => {
  if (input.value.toLowerCase() === 'spiderman') {
    sonidoSpider()
    if (e.key === "ArrowLeft") {
      position -= 3;
      sonidoSpider()
    } else if (e.key === "ArrowRight") {
      position += 3;
    }

    spiderman.style.left = position + "vw";

    if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
      spiderman.classList.add('spiderman2');
      spiderman.classList.remove('spiderman');
    }
  } else if (e.key === 'Backspace') {
    spiderman.classList.add('spiderman');
    spiderman.classList.remove('spiderman2');
  }
});

let spiderman = document.getElementById('showSpiderman');
let input = document.querySelector('input');

input.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' && input.value.toLowerCase() === 'spider-man') {
    spiderman.classList.add('spiderman2');
    spiderman.classList.remove('spiderman');
  } else if (e.key === 'Backspace') {
    spiderman.classList.add('spiderman');
    spiderman.classList.remove('spiderman2');
  }
});

let spiderman = document.getElementById('showSpiderman')

window.addEventListener('keydown',(e)=>{
  if(e.key =='Enter'){
    spiderman.classList.add('spiderman2')
    spiderman.classList.remove('spiderman')
  }else if(e.key == 'Backspace'){
    spiderman.classList.add   ('spiderman')
    spiderman.classList.remove('spiderman2')
  }
})
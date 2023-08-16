var boton = document.getElementById("copiador");
boton.addEventListener("click", copiarAlPortapapeles, false);
function copiarAlPortapapeles() {
  var enlace = document.getElementById("enlace");
  var inputFalso = document.createElement("input");
  inputFalso.setAttribute("value", enlace.innerHTML);
  document.body.appendChild(inputFalso);
  inputFalso.select();
  document.execCommand("copy");
  document.body.removeChild(inputFalso);
}

var check=document.querySelector(".check");
check.addEventListener('click',idioma);

function idioma(){
  let id=check.checked;
  if(id==true){
    location.href="en/index.html";
  }else{
    location.href="../index.html";
  }
}
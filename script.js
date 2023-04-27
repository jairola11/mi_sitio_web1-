/* Función para resaltar la sección activa en el menú de navegación */
function resaltarSeccion() {
    const secciones = document.querySelectorAll("section");
    const menu = document.querySelectorAll("header nav ul li");
    
    secciones.forEach((seccion, index) => {
      const seccionTop = seccion.offsetTop;
      const seccionHeight = seccion.clientHeight;
      
      if (window.scrollY >= seccionTop - 50 && window.scrollY < seccionTop + seccionHeight - 50) {
        menu[index].classList.add("activo");
      } else {
        menu[index].classList.remove("activo");
      }
    });
  }
  
  /* Evento de desplazamiento para resaltar la sección activa en el menú de navegación */
  window.addEventListener("scroll", () => {
    resaltarSeccion();
  });
  
  /* Evento de envío de formulario de contacto */
  const form = document.querySelector("form");
  
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    
    const nombre = document.querySelector("#nombre").value;
    const email = document.querySelector("#email").value;
    const mensaje = document.querySelector("#mensaje").value;
    
    /* Aquí podrías agregar código para enviar el formulario a través de AJAX o una API */
    
    alert(`Gracias por enviar tu mensaje, ${nombre}!`);
  });
//   function mostrarModal(event) {
//     event.preventDefault();
//     const modal = event.target.parentNode.querySelector('.modal');
//     modal.style.display = 'block';
//   }
  
//   function cerrarModal(event) {
//     event.preventDefault();
//     const modal = event.target.parentNode.parentNode;
//     modal.style.display = 'none';
//   }
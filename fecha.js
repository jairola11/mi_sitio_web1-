function calcularTiempoRestante() {
  let dia = parseInt(document.getElementById("dia").value);
  let mes = parseInt(document.getElementById("mes").value);
  let anio = parseInt(document.getElementById("anio").value);
  let hora = parseInt(document.getElementById("hora").value);
  let minutos = parseInt(document.getElementById("minutos").value);

  let fechaActual = new Date();
  let fechaLimite = new Date(anio, mes - 1, dia, hora, minutos);

  let diferencia = fechaLimite - fechaActual;

  if (diferencia < 0 || fechaLimite.getDate() >= 22) {
    document.getElementById("resultado").innerHTML = "El plazo ha expirado. No es posible subir el archivo.";
  } else {
    let diasRestantes = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    diferencia -= diasRestantes * (1000 * 60 * 60 * 24);
    let horasRestantes = Math.floor(diferencia / (1000 * 60 * 60));
    diferencia -= horasRestantes * (1000 * 60 * 60);
    let minutosRestantes = Math.floor(diferencia / (1000 * 60));

    document.getElementById("resultado").innerHTML = "Tiempo restante: " + diasRestantes + " días, " + horasRestantes + " horas y " + minutosRestantes + " minutos.";
  }
}

function calcularTiempoRestante() {
    var dia = parseInt(document.getElementById("dia").value);
    var mes = parseInt(document.getElementById("mes").value);
    var anio = parseInt(document.getElementById("anio").value);
    var hora = parseInt(document.getElementById("hora").value);
    var minutos = parseInt(document.getElementById("minutos").value);
  
    var fechaActual = new Date();
    var fechaLimite = new Date(anio, mes - 1, dia, hora, minutos);
  
    var diferencia = fechaLimite - fechaActual;
  
    if (diferencia < 0) {
      document.getElementById("resultado").innerHTML = "El plazo ya ha vencido. No es posible subir el archivo.";
    } else {
      var diasRestantes = Math.floor(diferencia / (1000 * 60 * 60 * 24));
      diferencia -= diasRestantes * (1000 * 60 * 60 * 24);
      var horasRestantes = Math.floor(diferencia / (1000 * 60 * 60));
      diferencia -= horasRestantes * (1000 * 60 * 60);
      var minutosRestantes = Math.floor(diferencia / (1000 * 60));
  
      document.getElementById("resultado").innerHTML = "Tiempo restante: " + diasRestantes + " días, " + horasRestantes + " horas y " + minutosRestantes + " minutos.";
    }
  }
  
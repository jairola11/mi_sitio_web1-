const readline = require('readline');

const estudiantes = [];

const op = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function mostrarMenu() {
  console.log('-----------------$ MENU DE NOTAS $------------------------');
  console.log('|    1.   |  Registrar notas de un estudiante            |');
  console.log('|    2.   |  Eliminar notas de un estudiante             |');
  console.log('|    3.   |  Mostrar notas                               |');
  console.log('|    4.   |  Mostrar lista de estudiantes que perdieron  |');
  console.log('|    5.   |  Mostrar lista de promedios                  |');
  console.log('|    6.   |  Salir                                       |');
  console.log('-------------------------$$--$$---------------------------');
  op.question('|   seleccion   |   Seleccione una opción: ', (opcion) => {
  console.log('-------------------------$$--$$---------------------------');
    switch (opcion) {
      case '1':
        registrarNotas();
        break;
      case '2':
        eliminarNotas();
        break;
      case '3':
        mostrarNotasYPromedio();
        break;
      case '4':
        mostrarListaPerdieron();
        break;
      case '5':
        mostrarPromedio();
      case '6':
        op.close();
        break;
      default:
        console.log('Opción inválida. Por favor, seleccione una opción válida.');
        mostrarMenu();
        break;
    }
  });
}

function registrarNotas() {
  let nombre = '';
  const notasEstudiante = [];

  op.question('Ingrese el nombre del estudiante: ', (respuesta) => {
    nombre = respuesta;
    let contador = 1;

    const ingresarNota = () => {
      op.question(`Ingrese la nota ${contador}: `, (respuesta) => {
        const nota = parseFloat(respuesta);
        notasEstudiante.push(nota);
        contador++;

        if (contador <= 3) {
          ingresarNota();
        } else {
          estudiantes.push({ nombre, notas: notasEstudiante });
          console.log(`Notas registradas con éxito para ${nombre}.\n`);
          mostrarMenu();
        }
      });
    };

    ingresarNota();
  });
}

function eliminarNotas() {
  op.question('Ingrese el nombre del estudiante: ', (nombre) => {
    const estudianteIndex = estudiantes.findIndex(estudiante => estudiante.nombre === nombre);

    if (estudianteIndex !== -1) {
      estudiantes.splice(estudianteIndex, 1);
      console.log(`Notas del estudiante ${nombre} eliminadas con éxito.\n`);
    } else {
    console.log('----------------|  listado de notas     |-------------------------');
    console.log(` No se encontraron notas para el estudiante ${nombre}.\n`);
    console.log('----------------| --------------------- |-------------------------');
    }

    mostrarMenu();
  });
}

function mostrarNotasYPromedio() {
  console.log('---- NOTAS Y PROMEDIOS ----');

  for (let estudiante of estudiantes) {
    const notasEstudiante = estudiante.notas;
    const promedio = calcularPromedio(notasEstudiante);

    console.log(`${estudiante.nombre}: Notas - ${notasEstudiante.join(', ')}, el  Promedio final es: ${promedio}`);
  }

  if (estudiantes.length === 0) {
    console.log('----------------| listado de registros  |-------------------------');
    console.log('|                No hay estudiantes registrados.                 |\n');
    console.log('----------------| --------------------  |-------------------------');
  }

  mostrarMenu();
}

function mostrarPromedio() {
    
    console.log('----   PROMEDIOS ----');

  for (let estudiante of estudiantes) {
    const notasEstudiante = estudiante.notas;
    const promedio = calcularPromedio(notasEstudiante);

    console.log(`${estudiante.nombre}: El  Promedio final del estudiante es: ${promedio}`);
  }

  if (estudiantes.length === 0) {
    console.log('----------------| listado de promedios  |-------------------------');
    console.log('|                No hay estudiantes registrados.                 |\n');
    console.log('----------------| --------------------  |-------------------------');
  }

  mostrarMenu();
    


}


function mostrarListaPerdieron() {
  console.log('---- LISTA DE ESTUDIANTES QUE PERDIERON ----');

  let estudiantesPerdieron = [];

  for (let estudiante of estudiantes) {
    const notasEstudiante = estudiante.notas;
    const promedio = calcularPromedio(notasEstudiante);

    if (promedio < 3) {
      estudiantesPerdieron.push(estudiante.nombre);
    }
  }

  if (estudiantesPerdieron.length > 0) {
    console.log(estudiantesPerdieron.join(', '));
  } else {
    console.log('----------------| listado de perdedores |-------------------------');
    console.log('|          No hay estudiantes que hayan perdido.                 |\n');
    console.log('----------------| --------------------- |-------------------------');
  }

  mostrarMenu();
}

function calcularPromedio(notas) {
  const sumaNotas = notas.reduce((suma, nota) => suma + nota, 0);
  const promedio = sumaNotas / notas.length;
  return promedio.toFixed(2);
}3

mostrarMenu();

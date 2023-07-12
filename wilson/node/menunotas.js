// Importamos la biblioteca readline para poder leer y escribir en la consola
const readline = require('readline');

// Creamos un arreglo llamado "estudiantes" para almacenar la información de los estudiantes
const estudiantes = [];

// Creamos una interfaz readline para interactuar con el usuario a través de la consola
const op = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Función que muestra un menú con diferentes opciones relacionadas a las notas de los estudiantes
function mostrarMenu() {
  console.log('------------------------ BIENVENIDO ------------------------');
  console.log('|                         MENU DE NOTAS                       |');
  console.log('-------------------------------------------------------------');
  console.log('|    1.   |  Registrar notas de un estudiante            |');
  console.log('|    2.   |  Eliminar notas de un estudiante             |');
  console.log('|    3.   |  Mostrar notas                               |');
  console.log('|    4.   |  Mostrar lista de estudiantes que no aprobaron  |');
  console.log('|    5.   |  Mostrar lista de promedios                  |');
  console.log('|    6.   |  Salir                                       |');
  console.log('-------------------------------------------------------------');
}

// Función que registra las notas de un estudiante ingresadas por el usuario
function registrarNotas() {
  let nombre = '';
  const notasEstudiante = [];

  // Pedimos al usuario que ingrese el nombre del estudiante
  op.question('Por favor, ingrese el nombre del estudiante: ', (respuesta) => {
    nombre = respuesta;
    let contador = 1;

    // Utilizamos una función recursiva para pedir al usuario que ingrese las notas del estudiante
    const ingresarNota = () => {
      op.question(`Por favor, ingrese la nota ${contador}: `, (respuesta) => {
        const nota = parseFloat(respuesta);
        notasEstudiante.push(nota);
        contador++;

        // Si aún no se han ingresado todas las notas, llamamos nuevamente a la función recursiva
        if (contador <= 3) {
          ingresarNota();
        } else {
          // Una vez que se han ingresado todas las notas, almacenamos los datos del estudiante en el arreglo "estudiantes"
          estudiantes.push({ nombre, notas: notasEstudiante });
          console.log(`Notas registradas exitosamente para el estudiante ${nombre}.\n`);
          mostrarMenu();
        }
      });
    };

    ingresarNota();
  });
}

// Función que elimina las notas de un estudiante seleccionado por el usuario
function eliminarNotas() {
  // Pedimos al usuario que ingrese el nombre del estudiante cuyas notas desea eliminar
  op.question('Por favor, ingrese el nombre del estudiante: ', (nombre) => {
    // Buscamos al estudiante en el arreglo "estudiantes"
    const estudianteIndex = estudiantes.findIndex(estudiante => estudiante.nombre === nombre);

    // Si encontramos al estudiante, lo eliminamos del arreglo
    if (estudianteIndex !== -1) {
      estudiantes.splice(estudianteIndex, 1);
      console.log(`Notas del estudiante ${nombre} eliminadas exitosamente.\n`);
    } else {
      console.log(`No se encontraron notas para el estudiante ${nombre}.\n`);
    }

    mostrarMenu();
  });
}

// Función que muestra las notas y promedios de todos los estudiantes registrados
function mostrarNotasYPromedio() {
  console.log('------------------ NOTAS Y PROMEDIOS ------------------');

  // Recorremos el arreglo "estudiantes" y mostramos las notas y el promedio de cada estudiante
  for (let estudiante of estudiantes) {
    const notasEstudiante = estudiante.notas;
    const promedio = calcularPromedio(notasEstudiante);

    console.log(`${estudiante.nombre}: Notas - ${notasEstudiante.join(', ')}, Promedio final: ${promedio}`);
  }

  // Si no hay estudiantes registrados, mostramos un mensaje indicando que no hay datos para mostrar
  if (estudiantes.length === 0) {
    console.log('No hay estudiantes registrados.\n');
  }

  mostrarMenu();
}

// Función que muestra la lista de estudiantes que no aprobaron (promedio menor a 3)
function mostrarListaPerdieron() {
  console.log('-------------- LISTA DE ESTUDIANTES QUE NO APROBARON --------------');

  let estudiantesPerdieron = [];

  // Recorremos el arreglo "estudiantes" y verificamos si el promedio de cada estudiante es menor a 3
  for (let estudiante of estudiantes) {
    const notasEstudiante = estudiante.notas;
    const promedio = calcularPromedio(notasEstudiante);

    if (promedio < 3) {
      estudiantesPerdieron.push(estudiante.nombre);
    }
  }

  // Si hay estudiantes que no aprobaron, mostramos sus nombres. Si no, mostramos un mensaje indicando que no hay datos para mostrar
  if (estudiantesPerdieron.length > 0) {
    console.log(estudiantesPerdieron.join(', '));
  } else {
    console.log('No hay estudiantes que no hayan aprobado.\n');
  }

  mostrarMenu();
}

// Función que muestra los promedios de todos los estudiantes registrados
function mostrarPromedio() {
  console.log('--------------------- PROMEDIOS ---------------------');

  // Recorremos el arreglo "estudiantes" y mostramos el promedio de cada estudiante
  for (let estudiante of estudiantes) {
    const notasEstudiante = estudiante.notas;
    const promedio = calcularPromedio(notasEstudiante);

    console.log(`${estudiante.nombre}: Promedio final: ${promedio}`);
  }

  // Si no hay estudiantes registrados, mostramos un mensaje indicando que no hay datos para mostrar
  if (estudiantes.length === 0) {
    console.log('No hay estudiantes registrados.\n');
  }

  mostrarMenu();
}

// Función que calcula el promedio de un arreglo de notas
function calcularPromedio(notas) {
  const sumaNotas = notas.reduce((suma, nota) => suma + nota, 0);
  const promedio = sumaNotas / notas.length;
  return promedio.toFixed(2);
}

// Función principal que inicia el programa
function iniciarPrograma() {
  mostrarMenu();
  let opcion = '';

  // Utilizamos un bucle while para mantener el programa en ejecución hasta que se seleccione la opción "6" (Salir)
  while (opcion !== '6') {
    // Solicitamos al usuario que seleccione una opción del menú
    op.question('|   Selecciona una opción: ', (respuesta) => {
      console.log('-------------------------------------------------------------');
      opcion = respuesta;

      // Según la opción seleccionada, ejecutamos la función correspondiente o mostramos un mensaje indicando una opción inválida
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
          break;
        case '6':
          op.close();
          break;
        default:
          console.log('Elección no válida. Por favor, elija una opción que sea válida.\n');
          break;
      }
    });
  }
}

// Iniciamos el programa llamando a la función principal
iniciarPrograma();

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
  console.log('|    1.   |  Registrar calificaciones de un estudiante.           |');
  console.log('|    2.   |  Eliminar calificaciones de un estudiante.           |');
  console.log('|    3.   |  Mostrar calificaciones                              |');
  console.log('|    4.   |  Mostrar lista de estudiantes que no aprobaron. |');
  console.log('|    5.   | Mostrar lista de promedios.                 |');
  console.log('|    6.   |  Salir                                       |');
  console.log('-------------------------------------------------------------');
}

// Función que registra las notas de un estudiante ingresadas por el usuario
function registrarcalificaciones() {
  let nombre = '';
  const calificacionesEstudiante = [];

  // Pedimos al usuario que ingrese el nombre del estudiante
  op.question('Por favor, ingrese el nombre del estudiante: ', (respuesta) => {
    nombre = respuesta;
    let contador = 1;

    // Utilizamos una función recursiva para pedir al usuario que ingrese las notas del estudiante
    const ingresarcalificaciones = () => {
      op.question(`Por favor, ingrese la calificacion ${contador}: `, (respuesta) => {
        const calificacion= parseFloat(respuesta);
        calificacionesEstudiante.push(calificacion);
        contador++;

        // Si aún no se han ingresado todas las notas, llamamos nuevamente a la función recursiva
        if (contador <= 3) {
          ingresar();
        } else {
          // Una vez que se han ingresado todas las notas, almacenamos los datos del estudiante en el arreglo "estudiantes"
          estudiantes.push({ nombre, notas: notasEstudiante });
          console.log(`las calificaciones registraron exitosamente para el estudiante ${nombre}.\n`);
          mostrarMenu();
          solicitarOpcion();
        }
      });
    };

    ingresarcalificaciones();
  });
}

// Función que elimina las notas de un estudiante seleccionado por el usuario
function eliminarcalificaciones() {
  // Pedimos al usuario que ingrese el nombre del estudiante cuyas notas desea eliminar
  op.question('Por favor, ingrese el nombre del estudiante: ', (nombre) => {
    // Buscamos al estudiante en el arreglo "estudiantes"
    const estudianteIndex = estudiantes.findIndex(estudiante => estudiante.nombre === nombre);

    // Si encontramos al estudiante, lo eliminamos del arreglo
    if (estudianteIndex !== -1) {
      estudiantes.splice(estudianteIndex, 1);
      console.log(`calificaciones del estudiante ${nombre} eliminadas exitosamente.\n`);
    } else {
      console.log(`No se encontraron calificaciones para el estudiante ${nombre}.\n`);
    }

    mostrarMenu();
    solicitarOpcion();
  });
}

// Función que muestra las notas y promedios de todos los estudiantes registrados
function mostrar_calificaciones_Promedio() {
  console.log('------------------ calificaciones Y PROMEDIOS ------------------');

  // Recorremos el arreglo "estudiantes" y mostramos las notas y el promedio de cada estudiante
  for (let estudiante of estudiantes) {
    const notasEstudiante = estudiante.notas;
    const promedio = calcularPromedio(notasEstudiante);

    console.log(`${estudiante.nombre}: calificaciones - ${notasEstudiante.join(', ')}, Promedio final: ${promedio}`);
  }

  // Si no hay estudiantes registrados, mostramos un mensaje indicando que no hay datos para mostrar
  if (estudiantes.length === 0) {
    console.log('No hay estudiantes registrados.\n');
  }

  mostrarMenu();
  solicitarOpcion();
}

// Función que muestra la lista de estudiantes que no aprobaron (promedio menor a 3)
function mostrar_perdieron() {
  console.log('-------------- LISTA DE ESTUDIANTES QUE NO APROBARON --------------');

  let estudiantesPerdieron = [];

  // Recorremos el arreglo "estudiantes" y verificamos si el promedio de cada estudiante es menor a 3
  for (let estudiante of estudiantes) {
    const calificaciones_Estudiante = estudiante.calificacion;
    const promedio = calcularPromedio(calificaciones_Estudiante);

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
  solicitarOpcion();
}

// Función que muestra los promedios de todos los estudiantes registrados
function mostrarPromedio() {
  console.log('--------------------- PROMEDIOS ---------------------');

  // Recorremos el arreglo "estudiantes" y mostramos el promedio de cada estudiante
  for (let estudiante of estudiantes) {
    const calificaciones_Estudiante = estudiante.calificacion;
    const promedio = calcularPromedio(calificaciones_Estudiante);

    console.log(`${estudiante.nombre}: Promedio final: ${promedio}`);
  }

  // Si no hay estudiantes registrados, mostramos un mensaje indicando que no hay datos para mostrar
  if (estudiantes.length === 0) {
    console.log('No hay estudiantes registrados.\n');
  }

  mostrarMenu();
  solicitarOpcion();
}

// Función que calcula el promedio de un arreglo de notas
function calcularPromedio(notas) {
  const sumacalificacion = caficacion.reduce((suma, calificacion) => suma + calificacion, 0);
  const promedio = sumacalificacion/ notas.length;
  return promedio.toFixed(2);
}

// Función para solicitar al usuario que seleccione una opción del menú
function solicitarOpcion() {
  op.question('|   Selecciona una opción: ', (opcion) => {
    console.log('-------------------------------------------------------------');

    // Según la opción seleccionada, ejecutamos la función correspondiente o mostramos un mensaje indicando una opción inválida
    switch (opcion) {
      case '1':
        registrarcalificaciones();
        break;
      case '2':
        eliminarcalificaciones();
        break;
      case '3':
        mostrar_calificaciones_Promedio();
        break;
      case '4':
        mostrar_perdieron();
        break;
      case '5':
        mostrarPromedio();
        break;
      case '6':
        op.close();
        break;
      default:
        console.log('Opción inválida. Por favor, seleccione una opción válida.\n');
        mostrarMenu();
        solicitarOpcion();
        break;
    }
  });
}

// Función principal que inicia el programa
function iniciarPrograma() {
  mostrarMenu();
  solicitarOpcion();
}


iniciarPrograma();

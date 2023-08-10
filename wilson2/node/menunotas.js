
const readline = require('readline');

const estudiantes = [];

const op = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


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


function registrarcalificaciones() {
  let nombre = '';
  const calificacionesEstudiante = [];

  op.question('Por favor, ingrese el nombre del estudiante: ', (respuesta) => {
    nombre = respuesta;
    let contador = 1;

    
    const ingresarcalificaciones = () => {
      op.question(`Por favor, ingrese la calificacion ${contador}: `, (respuesta) => {
        const calificacion= parseFloat(respuesta);
        calificacionesEstudiante.push(calificacion);
        contador++;

        
        if (contador <= 3) {
          ingresar();
        } else {
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


function eliminarcalificaciones() {
  op.question('Por favor, ingrese el nombre del estudiante: ', (nombre) => {
    const estudianteIndex = estudiantes.findIndex(estudiante => estudiante.nombre === nombre);
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
function mostrar_calificaciones_Promedio() {
  console.log('------------------ calificaciones Y PROMEDIOS ------------------');
  for (let estudiante of estudiantes) {
    const notasEstudiante = estudiante.notas;
    const promedio = calcularPromedio(notasEstudiante);

    console.log(`${estudiante.nombre}: calificaciones - ${notasEstudiante.join(', ')}, Promedio final: ${promedio}`);
  }
  if (estudiantes.length === 0) {
    console.log('No hay estudiantes registrados.\n');
  }

  mostrarMenu();
  solicitarOpcion();
}
function mostrar_perdieron() {
  console.log('-------------- LISTA DE ESTUDIANTES QUE NO APROBARON --------------');

  let estudiantesPerdieron = [];
  for (let estudiante of estudiantes) {
    const calificaciones_Estudiante = estudiante.calificacion;
    const promedio = calcularPromedio(calificaciones_Estudiante);

    if (promedio < 3) {
      estudiantesPerdieron.push(estudiante.nombre);
    }
  }
  if (estudiantesPerdieron.length > 0) {
    console.log(estudiantesPerdieron.join(', '));
  } else {
    console.log('No hay estudiantes que no hayan aprobado.\n');
  }

  mostrarMenu();
  solicitarOpcion();
}
function mostrarPromedio() {
  console.log('--------------------- PROMEDIOS ---------------------');
  for (let estudiante of estudiantes) {
    const calificaciones_Estudiante = estudiante.calificacion;
    const promedio = calcularPromedio(calificaciones_Estudiante);

    console.log(`${estudiante.nombre}: Promedio final: ${promedio}`);
  }
  if (estudiantes.length === 0) {
    console.log('No hay estudiantes registrados.\n');
  }

  mostrarMenu();
  solicitarOpcion();
}
function calcularPromedio(notas) {
  const sumacalificacion = caficacion.reduce((suma, calificacion) => suma + calificacion, 0);
  const promedio = sumacalificacion/ notas.length;
  return promedio.toFixed(2);
}
function solicitarOpcion() {
  op.question('|   Selecciona una opción: ', (opcion) => {
    console.log('-------------------------------------------------------------');

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
function iniciarPrograma() {
  mostrarMenu();
  solicitarOpcion();
}


iniciarPrograma();

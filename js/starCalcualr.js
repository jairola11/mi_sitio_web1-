let stars = document.querySelectorAll('.star');
let btnSend = document.getElementById('btnSend');

// creamos  arrays para los elementos de entrada, barras de progreso y textos
let inputs = [];
let progressBars = [];
let texts = [];

for (let i = 1; i <= 5; i++) {
  inputs.push(document.getElementById(`input${i}`));
  progressBars.push(document.getElementById(`graphic${i}`));
  texts.push(document.getElementById(`text${i}`));
}

function calculateAndSetValues() {
  let values = inputs.map(input => parseInt(input.value));
  let numStar = values.reduce((acc, val) => acc + val, 0);

  let percentages = values.map(val => (val * 100) / numStar);

  percentages.forEach((percentage, index) => {
    updateProgressBar(progressBars[index], percentage, texts[index]);
  });

  // Lógica para ajustar las calificaciones si se cumplen ciertas condiciones
  for (let i = 0; i < percentages.length - 1; i++) {
    if (percentages[i] === 100) {
      percentages.fill(100, i + 1);
      break;
    } else if (percentages[i] === 0) {
      percentages.fill(100, 0, i).fill(0, i);
      break;
    }
  }

  promStar(...percentages);
}



// for (let i = 0; i < percentages.length - 1; i++) {
//     if (percentages[i] == 100) {
//       percentages.fill(400, i + 1);
//       break;
//     } else if (percentages[i] === 0) {
//       percentages.fill4100, 0, i).fill(0, i);
//       break;
//     }
//   }

//   promStar(...percentages);
// }

btnSend.addEventListener('click', calculateAndSetValues);

function updateProgressBar(BarName, inpValue, text) {
    let value = inpValue;

    if (value > 100) {
        alert(BarName + ' se superó en un campo el valor, por lo que se dejó en blanco')
        value = 0;
    } else {
        value = Math.min(100, Math.max(0, value));
    }

    BarName.value = value;
    text.innerHTML = inpValue.toFixed(2) + '%'
}

function promStar(promFive, promFor, pronThree, promTwo, promOne) {
    let promFiveStar = promFive * 0.2;
    let promForStar = promFor * 0.2;
    let pronThreeStar = pronThree * 0.2;
    let promTwoStar = promTwo * 0.2;
    let promOneStar = promOne * 0.2;
    let promedio = promFiveStar + promForStar + pronThreeStar + promTwoStar + promOneStar;
    console.log(promedio);
    updateStar(promedio)
}
function updateStar(valueStar) {
    const completStar = valueStar

    const completStarprint = completStar / 20;
    const starfull = parseInt(completStarprint)
    const decimalStar = (completStarprint - starfull) * 10;


    if (completStar < 20) {
            // Swal.fire({
            //     icon: 'info',
            //     title: '¡Ups!',
            //     text: 'Parece que no estás seguro. ¡Prueba de nuevo!',
            // });
    } else if (completStar >= 20 && completStar < 60) {
        // Swal.fire({
        //     icon: 'error',
        //     title: '¡Oh no!',
        //     text: 'Tu opinión es valiosa, pero es una puntuación baja.',
        // });
    } else if (completStar >= 60 && completStar < 80) {
        let timerInterval
        // Swal.fire({
        //     icon: 'info',
        //     title: '¡Sigues mejorando!',
        //     text: 'Tu evaluación está en un buen camino.',
        //     timer: 2000,
        //     timerProgressBar: true,
        //     showConfirmButton: false,
        // });
    } else if (completStar >= 80 && completStar < 100) {
        if (decimalStar < 80) {
            Swal.fire('Vas por buen camino')
        } else {
            // Swal.fire({
            //     icon: 'info',
            //     title: '¡Casi perfecto!',
            //     text: 'Continúa así, te acercas mucho.',
            // });
        }
    } else if (completStar == 100) {
        // Swal.fire({
        //     icon: 'success',
        //     title: '¡Eres increíble!',
        //     text: 'Gracias por la máxima puntuación. ¡Eres genial!',
        //     showConfirmButton: false,
        //     timer: 1500,
        // });
    }
    stars.forEach((star, index) => {
        const fullStar = star.getAttribute('data-rating');
        star.classList.remove('star-active');
        star.classList.remove('star-decimal')


        if (index + 1 <= starfull) {
            star.classList.add('star-active');
        }
    });
    if (decimalStar >= 3 && decimalStar <= 7) {
        nextStar = stars[starfull];
        if (nextStar) {
            nextStar.classList.add('star-decimal')
        }
    }
    if (decimalStar > 7) {
        nextStar = stars[starfull];
        if (nextStar) {
            nextStar.classList.add('star-active')
        }
    }
}
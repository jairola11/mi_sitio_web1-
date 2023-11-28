
let stars = document.querySelectorAll('.star');
let btnSend = document.getElementById('btnSend');
let inputs = [
    { input: document.getElementById('input1'), progressBar: document.getElementById('graphic1'), text: document.getElementById('text1') },
    { input: document.getElementById('input2'), progressBar: document.getElementById('graphic2'), text: document.getElementById('text2') },
    { input: document.getElementById('input3'), progressBar: document.getElementById('graphic3'), text: document.getElementById('text3') },
    { input: document.getElementById('input4'), progressBar: document.getElementById('graphic4'), text: document.getElementById('text4') },
    { input: document.getElementById('input5'), progressBar: document.getElementById('graphic5'), text: document.getElementById('text5') }
];

btnSend.addEventListener('click', function () {
    let values = inputs.map(input => parseInt(input.input.value));
    let totalValues = values.reduce((acc, cur) => acc + cur, 0);

    let percentages = values.map(value => (value * 100) / totalValues);
    percentages.forEach((percentage, index) => {
        updateProgressBar(inputs[index].progressBar, percentage, inputs[index].text);
    });

    // Calcular distribución de estrellas
    let starsDistribution = percentages.map(percentage => Math.round(percentage / 20));
    let average = percentages.reduce((acc, cur) => acc + cur) / 5;

    // Actualizar estrellas
    updateStar(average);
    promStar(starsDistribution);
});

function updateProgressBar(progressBar, percentage, textElement) {
    let value = Math.min(100, Math.max(0, percentage));
    progressBar.value = value;
    textElement.textContent = `${value.toFixed(2)}%`;
}

function promStar(starsDistribution) {
    let averageStars = starsDistribution.reduce((acc, cur) => acc + cur) / 5;
    updateStar(averageStars * 20);
}

// function updateStar(valueStar) {
//     const completStar = valueStar;



//     const completStarprint = completStar / 20;
//     const starfull = parseInt(completStarprint);
//     const decimalStar = (completStarprint - starfull) * 10;

//     let nextStar;
//     if (completStar < 20) {
//         Swal.fire({
//             icon: 'info',
//             title: '¡Ups!',
//             text: 'Parece que no estás seguro. ¡Prueba de nuevo!',
//         });;
//     } else if (completStar >= 20 && completStar < 60) {
//         Swal.fire({
//             icon: 'error',
//             title: '¡Oh no!',
//             text: 'Tu opinión es valiosa, pero es una puntuación baja.',
//         });
//     } else if (completStar >= 60 && completStar < 80) {
//         Swal.fire({
//             icon: 'info',
//             title: '¡Sigues mejorando!',
//             text: 'Tu evaluación está en un buen camino.',
//             timer: 2000,
//             timerProgressBar: true,
//             showConfirmButton: false,
//         });
//     } else if (completStar >= 80 && completStar < 100) {
//         if (decimalStar < 8) {
//             Swal.fire('Vas por buen camino');
//         } else {
//             Swal.fire({
//                 icon: 'info',
//                 title: '¡Casi perfecto!',
//                 text: 'Continúa así, te acercas mucho.',
//             });
//         }
//     } else if (completStar === 100) {
//         Swal.fire({
//             icon: 'success',
//             title: '¡Eres increíble!',
//             text: 'Gracias por la máxima puntuación. ¡Eres genial!',
//             showConfirmButton: false,
//             timer: 1500,
//         });
//     }

//     stars.forEach((star, index) => {
//         const fullStar = star.getAttribute('data-rating');
//         star.classList.remove('star-active');
//         star.classList.remove('star-decimal');

//         if (index + 1 <= starfull) {
//             star.classList.add('star-active');
//         }
//     });

//     if (decimalStar >= 3 && decimalStar <= 7) {
//         nextStar = stars[starfull];
//         if (nextStar) {
//             nextStar.classList.add('star-decimal');
//         }
//     }

//     if (decimalStar > 7) {
//         nextStar = stars[starfull];
//         if (nextStar) {
//             nextStar.classList.add('star-active');
//         }
//     }
// }
function updateStar(valueStar) {
    const completStar = valueStar;
    const completStarprint = completStar / 20;
    const starfull = parseInt(completStarprint);
    const decimalStar = (completStarprint - starfull) * 10;

    stars.forEach((star, index) => {
        const fullStar = star.getAttribute('data-rating');
        star.classList.remove('star-active');
        star.classList.remove('star-decimal');

        if (index + 1 <= starfull) {
            star.classList.add('star-active');
        }
    });

    if (decimalStar >= 3 && decimalStar <= 7) {
        const nextStar = stars[starfull];
        if (nextStar) {
            nextStar.classList.add('star-decimal');
        }
    } else if (decimalStar > 7) {
        const nextStar = stars[starfull];
        if (nextStar) {
            nextStar.classList.add('star-active');
        }
    }
}
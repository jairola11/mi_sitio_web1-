let inputValue = document.getElementById('valor');
let stars = document.querySelectorAll('.star');
let message = document.getElementById('textMessage');
let btnSend = document.getElementById('btnSend');

// Obtener valor de estrellas y controlar que no sean mayores de 5
btnSend.addEventListener('click', function () {
    const inStar = inputValue.value;
    if (inStar > 5) {
        Swal.fire({
            icon: 'warning',
            title: 'Valor máximo permitido: 5 estrellas',
        });
        stars.forEach((star) => {
            star.classList.remove('star-active');
            star.classList.remove('star-decimal');
        });
    } else {
        message.innerHTML = '';
        updateStar(inStar);
    }
});

function updateStar(valueStar) {
    const completStar = parseInt(valueStar);
    const decimalStar = Math.round((valueStar - completStar) * 10);

    if (completStar < 1) {
        Swal.fire({
            icon: 'info',
            title: '¡Ups!',
            text: 'Parece que no estás seguro. ¡Prueba de nuevo!',
        });
    } else if (completStar >= 1 && completStar < 3) {
        Swal.fire({
            icon: 'error',
            title: '¡Oh no!',
            text: 'Tu opinión es valiosa, pero es una puntuación baja.',
        });
    } else if (completStar >= 3 && completStar < 4) {
        Swal.fire({
            icon: 'info',
            title: '¡Sigues mejorando!',
            text: 'Tu evaluación está en un buen camino.',
            timer: 2000,
            timerProgressBar: true,
            showConfirmButton: false,
        });
    } else if (completStar >= 4 && completStar < 5) {
        if (decimalStar < 8) {
            Swal.fire({
                icon: 'info',
                title: '¡Casi perfecto!',
                text: 'Continúa así, te acercas mucho.',
            });
        } else {
            Swal.fire({
                icon: 'success',
                title: '¡Excelente!',
                text: 'Has dado una calificación casi perfecta. ¡Felicidades!',
                showConfirmButton: false,
                timer: 1500,
            });
        }
    } else if (completStar == 5) {
        Swal.fire({
            icon: 'success',
            title: '¡Eres increíble!',
            text: 'Gracias por la máxima puntuación. ¡Eres genial!',
            showConfirmButton: false,
            timer: 1500,
        });
    }

    stars.forEach((star, index) => {
        const fullStar = star.getAttribute('data-rating');
        star.classList.remove('star-active');
        star.classList.remove('star-decimal');

        if (index + 1 <= completStar) {
            star.classList.add('star-active');
        }
    });

    if (decimalStar >= 3 && decimalStar <= 7) {
        nextStar = stars[completStar];
        if (nextStar) {
            nextStar.classList.add('star-decimal');
        }
    }
    if (decimalStar > 7) {
        nextStar = stars[completStar];
        if (nextStar) {
            nextStar.classList.add('star-active');
        }
    }
}

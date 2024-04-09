document.addEventListener('DOMContentLoaded', function () {
    const carrusel = document.querySelector('.carrusel');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    let counter = 0;

    nextBtn.addEventListener('click', () => {
        counter++;
        carrusel.style.transform = `translateX(-${counter * 100}%)`;
    });

    prevBtn.addEventListener('click', () => {
        if (counter > 0) {
            counter--;
            carrusel.style.transform = `translateX(-${counter * 100}%)`;
        }
    });
});

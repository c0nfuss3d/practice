document.addEventListener("DOMContentLoaded", function () {
    const startDateElement = document.querySelector('.main__start__date');
    const today = new Date();
    const options = { month: 'long', day: 'numeric' };
    const formattedDate = today.toLocaleDateString('ru-RU', options);
    startDateElement.textContent = formattedDate;
});

document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll('.slider__slide');
    const prevBtn = document.querySelector('.slider__btn--prev');
    const nextBtn = document.querySelector('.slider__btn--next');
    let currentIndex = 0;

    function showSlide(index) {
        const totalSlides = slides.length;
        const newIndex = (index + totalSlides) % totalSlides;
        document.querySelector('.slider__wrapper').style.transform = `translateX(-${newIndex * 100}%)`;
        currentIndex = newIndex;
    }

    prevBtn.addEventListener('click', () => {
        showSlide(currentIndex - 1);
    });

    nextBtn.addEventListener('click', () => {
        showSlide(currentIndex + 1);
    });

    // Auto-slide functionality (optional)
    setInterval(() => {
        showSlide(currentIndex + 1);
    }, 5000); // Change slide every 5 seconds
});

(function () {
    'use strict';

    // Your additional js should go there

}());


document.addEventListener('DOMContentLoaded', function() {
    const track = document.getElementById('carouselTrack');
    const nextBtn = document.getElementById('nextBtn');
    const prevBtn = document.getElementById('prevBtn');
    
    let index = 0;

    function updateCarousel() {
        const cardWidth = document.querySelector('.carousel-card').offsetWidth + 20; // width + gap
        const visibleCards = Math.floor(document.querySelector('.carousel-viewport').offsetWidth / cardWidth);
        const totalCards = document.querySelectorAll('.carousel-card').length;
        const maxIndex = totalCards - visibleCards;

        if (index > maxIndex) index = maxIndex;
        if (index < 0) index = 0;

        track.style.transform = `translateX(-${index * cardWidth}px)`;
    }

    nextBtn.addEventListener('click', () => {
        const totalCards = document.querySelectorAll('.carousel-card').length;
        const visibleCards = Math.floor(document.querySelector('.carousel-viewport').offsetWidth / (document.querySelector('.carousel-card').offsetWidth + 20));
        
        if (index < (totalCards - visibleCards)) {
            index++;
            updateCarousel();
        }
    });

    prevBtn.addEventListener('click', () => {
        if (index > 0) {
            index--;
            updateCarousel();
        }
    });

    // Jalankan ulang kalkulasi saat layar di-resize
    window.addEventListener('resize', updateCarousel);
});

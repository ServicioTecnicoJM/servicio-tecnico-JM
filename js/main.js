document.addEventListener('DOMContentLoaded', () => {
    const elementosCarousel = document.querySelectorAll('.carousel');
    M.Carousel.init(elementosCarousel, {
        duration: 300,
        dist: -80,
        shift: 5,
        padding: 5,
        numVisible: 7,
        indicators: true,
        noWrap: false,
    });
});


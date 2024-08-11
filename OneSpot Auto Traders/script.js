document.addEventListener("DOMContentLoaded", function() {
    // Handle scroll events
    document.addEventListener("scroll", function() {
        const header = document.querySelector(".floater");
        const headerShadow = document.querySelector(".header-shadow");
        
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
            headerShadow.style.display = "none";
        } else {
            header.classList.remove("scrolled");
            headerShadow.style.display = "none";
        }
    });

    // Handle carousel functionality
    document.querySelectorAll(".carousel").forEach(function(carousel) {
        const leftArrow = carousel.querySelector(".arrow-left");
        const rightArrow = carousel.querySelector(".arrow-right");
        const carouselImages = carousel.querySelector(".carousel-images");
        const images = Array.from(carouselImages.children);
        let index = 0;

        function updateCarousel() {
            carouselImages.style.transform = `translateX(-${100 * index}%)`;
        }

        leftArrow.addEventListener("click", function() {
            index = (index - 1 + images.length) % images.length;
            updateCarousel();
        });

        rightArrow.addEventListener("click", function() {
            index = (index + 1) % images.length;
            updateCarousel();
        });
    });
});

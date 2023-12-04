document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".slider-text");
  let currentSlide = 0;

  function showSlide(slideIndex) {
    slides.forEach((slide, index) => {
      if (index === slideIndex) {
        slide.classList.add("active");
      } else {
        slide.classList.remove("active");
      }
    });
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }

  // Initially show the first slide
  showSlide(currentSlide);

  // Change the slide every 3 seconds
  setInterval(nextSlide, 3000);
});

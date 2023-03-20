let slider = document.querySelector('.slider');
let slides = document.querySelectorAll('.slide');
let slideWidth = slides[0].clientWidth;
let currentSlide = 0;

function nextSlide() {
  currentSlide++;
  if (currentSlide >= slides.length) {
    currentSlide = 0;
  }
  slider.style.transform = `translateX(-${slideWidth * currentSlide}px)`;
}

setInterval(nextSlide, 3000);

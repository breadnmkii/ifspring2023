const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

// Add event listeners for left and right arrow buttons
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
prev.addEventListener('onClick', prevSlide);
next.addEventListener('onClick', nextSlide);

// Functions for setting next/prev slides to "active" class
function nextSlide() {
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide + 1) % slides.length;
  console.log(currentSlide);
  console.log(slides[currentSlide]);
  slides[currentSlide].classList.add('active');
}

function prevSlide() {
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  slides[currentSlide].classList.add('active');
}






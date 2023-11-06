// document.addEventListener('DOMContentLoaded', function () {
//   let sliderContainer = document.querySelector('.slider-container');
//   let items = sliderContainer.querySelectorAll('li');
//   let interval = 2000; // Intervalo en milisegundos (2 segundos en este ejemplo)
//   let currentIndex = 0;

//   function showNextSlide() {
//     items[currentIndex].style.display = 'none'; // Oculta la imagen actual
//     currentIndex = (currentIndex + 1) % items.length;
//     items[currentIndex].style.display = 'block'; // Muestra la siguiente imagen
//   }

//   setInterval(showNextSlide, interval);
// });
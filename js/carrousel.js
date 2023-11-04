document.addEventListener('DOMContentLoaded', function () {
  var sliderContainer = document.querySelector('.slider-container');
  var items = sliderContainer.querySelectorAll('li');
  var interval = 2000; // Intervalo en milisegundos (2 segundos en este ejemplo)
  var currentIndex = 0;

  function showNextSlide() {
    items[currentIndex].style.display = 'none'; // Oculta la imagen actual
    currentIndex = (currentIndex + 1) % items.length;
    items[currentIndex].style.display = 'block'; // Muestra la siguiente imagen
  }

  setInterval(showNextSlide, interval);
});
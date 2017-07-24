var heroeSlider = document.querySelector('#heroeSlider'),
    heroeSliderIndex = 1,
    heroeSliderCount = document.querySelectorAll('#heroeSlider .slider__slide').length,
    heroeSliderInterval = heroeSlider.dataset.interval,
    timer = null;

var startHeroeSlider = function() {
  timer = setInterval(function() {
    if(heroeSliderIndex > heroeSliderCount)
      heroeSliderIndex = 1;

    currentSlide(++heroeSliderIndex);
  }, heroeSliderInterval);
}

var stopHeroeSlider = function() {
  clearInterval(timer);
}

startHeroeSlider();

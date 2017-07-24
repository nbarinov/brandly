var heroeSlider = document.querySelector('#heroeSlider'),
    heroeSliderIndex = 1,
    heroeSliderCount = document.querySelectorAll('#heroeSlider .slider__slide').length,
    heroeSliderInterval = heroeSlider.dataset.interval;

setInterval(function() {
  if(heroeSliderIndex > heroeSliderCount)
    heroeSliderIndex = 1;

  currentSlide(++heroeSliderIndex);
  console.log('slide', heroeSliderIndex);
}, heroeSliderInterval);

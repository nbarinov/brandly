function Slider(id, interval) {
  this.id = id;
  this.slides = document.querySelectorAll(this.id + ' .slider__slide');
  this.dots = document.querySelectorAll(this.id + ' .slider__dot');
  this.sliderIndex = 1;
  this.timer = null;
  this.interval = interval || 4500;
}

Slider.prototype.showSlides = function(n) {
  if(n > this.slides.length) this.sliderIndex = 1;
  if(n < 1) this.sliderIndex = this.slides.length;

  this.slides.forEach(function(value) {
    value.style.display = 'none';
  });

  this.dots.forEach(function(value) {
    value.classList.remove('slider__dot--active');
  });

  this.slides[this.sliderIndex - 1].style.display = 'block';
  this.dots[this.sliderIndex - 1].classList.add('slider__dot--active');
}

Slider.prototype.plusSlides = function(n) {
  this.showSlides(this.sliderIndex += n);
}

Slider.prototype.currentSlide = function(n) {
  this.showSlides(this.sliderIndex = n);
}

Slider.prototype.start = function() {
  this.currentSlide(this.sliderIndex);

  if(this.interval > 0) {
    this.timer = setInterval((function() {
      this.currentSlide(++this.sliderIndex);
    }).bind(this), this.interval);
  }
}

Slider.prototype.stop = function() {
  clearInterval(this.timer);
}

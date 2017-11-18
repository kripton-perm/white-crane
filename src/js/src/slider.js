// слайдер для новостей
var sliderItemsNews = document.querySelectorAll('.news .slider__item');
autoSliderNews();
var i = 0;
var timerNews;
function autoSliderNews() {
  timerNews = setTimeout(sliderRightNews, 10000);
  
}
function sliderRightNews() {
  sliderItemsNews[i].classList.remove('slider__item--current');
  i++;
  if (i >= sliderItemsNews.length) {
    i = 0;
  }
  sliderItemsNews[i].classList.add('slider__item--current');
  autoSliderNews();
}

// слайдер для направлений
var sliderItemsTypes = document.querySelectorAll('.types .slider__item');
autoSliderTypes();
var j = 0;
var timerTypes;
function autoSliderTypes() {
  timerTypes = setTimeout(sliderRightTypes, 10000);
}
function sliderRightTypes() {
  sliderItemsTypes[j].classList.remove('slider__item--current');
  j++;
  if (j >= sliderItemsTypes.length) {
    j = 0;
  }
  sliderItemsTypes[j].classList.add('slider__item--current');
  autoSliderTypes();
}

// слайдер для тренеров
var sliderItemsCoaches = document.querySelectorAll('.coaches .slider__item');
autoSliderCoaches();
var k = 0;
var timerCoaches;
function autoSliderCoaches() {
  timerCoaches = setTimeout(sliderRightCoaches, 10000);
}
function sliderRightCoaches() {
  sliderItemsCoaches[k].classList.remove('slider__item--current');
  k++;
  if (k >= sliderItemsCoaches.length) {
    k = 0;
  }
  sliderItemsCoaches[j].classList.add('slider__item--current');
  autoSliderCoaches();
}



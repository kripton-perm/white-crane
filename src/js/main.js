function autoSliderNews(){timerNews=setTimeout(sliderRightNews,1e4)}function sliderRightNews(){sliderItemsNews[i].classList.remove("slider__item--current"),++i>=sliderItemsNews.length&&(i=0),sliderItemsNews[i].classList.add("slider__item--current"),autoSliderNews()}function autoSliderTypes(){timerTypes=setTimeout(sliderRightTypes,1e4)}function sliderRightTypes(){sliderItemsTypes[j].classList.remove("slider__item--current"),++j>=sliderItemsTypes.length&&(j=0),sliderItemsTypes[j].classList.add("slider__item--current"),autoSliderTypes()}function autoSliderCoaches(){timerCoaches=setTimeout(sliderRightCoaches,1e4)}function sliderRightCoaches(){sliderItemsCoaches[k].classList.remove("slider__item--current"),++k>=sliderItemsCoaches.length&&(k=0),sliderItemsCoaches[j].classList.add("slider__item--current"),autoSliderCoaches()}$(document).ready(function(){var e=$(".main-nav"),s=$(".main-nav__toggle");e.removeClass("main-nav--nojs"),e.removeClass("main-nav--open"),e.addClass("main-nav--close"),s.on("click",function(){e.toggleClass("main-nav--close"),e.toggleClass("main-nav--open")})}),$(document).ready(function(){var e=$(".button--signup"),s=$(".signup"),t=$(".signup .signup__close");e.on("click",function(){s.addClass("modal--show")}),t.on("click",function(){s.removeClass("modal--show")})}),$(document).ready(function(){var e=$(".schedule"),s=$(".schedule__days-button");e.removeClass("schedule--nojs"),s.on("click",function(e){var s=$(".schedule__days-button--current"),t=$(".schedule__day--show");s.removeClass("schedule__days-button--current"),$(e.currentTarget).addClass("schedule__days-button--current");var d=$(e.currentTarget).parent().index();t.removeClass("schedule__day--show"),0==d?$(".schedule__day:nth-of-type(1)").addClass("schedule__day--show"):1==d?$(".schedule__day:nth-of-type(2)").addClass("schedule__day--show"):2==d?$(".schedule__day:nth-of-type(3)").addClass("schedule__day--show"):3==d?$(".schedule__day:nth-of-type(4)").addClass("schedule__day--show"):4==d?$(".schedule__day:nth-of-type(5)").addClass("schedule__day--show"):5==d?$(".schedule__day:nth-of-type(6)").addClass("schedule__day--show"):6==d&&$(".schedule__day:nth-of-type(7)").addClass("schedule__day--show")})});var sliderItemsNews=document.querySelectorAll(".news .slider__item");autoSliderNews();var timerNews,i=0,sliderItemsTypes=document.querySelectorAll(".types .slider__item");autoSliderTypes();var timerTypes,j=0,sliderItemsCoaches=document.querySelectorAll(".coaches .slider__item");autoSliderCoaches();var timerCoaches,k=0;
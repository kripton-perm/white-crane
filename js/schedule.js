var scheduleSignup = document.querySelector('.schedule__signup');
var scheduleModal = document.querySelector('.schedule__modal');
var scheduleClose = scheduleModal.querySelector('.signup__close');

scheduleSignup.addEventListener('click', function() {
  scheduleModal.classList.add('modal--show');
});
scheduleClose.addEventListener('click', function() {
  scheduleModal.classList.remove('modal--show');
});

var schedule = document.querySelector('.schedule');
schedule.classList.remove('schedule--nojs');

var buttons = document.querySelectorAll('.schedule__days-button');
var days = document.querySelectorAll('.schedule__day');

buttons[0].addEventListener('click', function() {
  buttons[1].classList.remove('schedule__days-button--current');
  buttons[2].classList.remove('schedule__days-button--current');
  buttons[3].classList.remove('schedule__days-button--current');
  buttons[4].classList.remove('schedule__days-button--current');
  buttons[5].classList.remove('schedule__days-button--current');
  buttons[6].classList.remove('schedule__days-button--current');
  buttons[0].classList.add('schedule__days-button--current');
  days[1].classList.remove('schedule__day--show');
  days[2].classList.remove('schedule__day--show');
  days[3].classList.remove('schedule__day--show');
  days[4].classList.remove('schedule__day--show');
  days[5].classList.remove('schedule__day--show');
  days[6].classList.remove('schedule__day--show');
  days[0].classList.add('schedule__day--show');
});
buttons[1].addEventListener('click', function() {
  buttons[0].classList.remove('schedule__days-button--current');
  buttons[2].classList.remove('schedule__days-button--current');
  buttons[3].classList.remove('schedule__days-button--current');
  buttons[4].classList.remove('schedule__days-button--current');
  buttons[5].classList.remove('schedule__days-button--current');
  buttons[6].classList.remove('schedule__days-button--current');
  buttons[1].classList.add('schedule__days-button--current');
  days[0].classList.remove('schedule__day--show');
  days[2].classList.remove('schedule__day--show');
  days[3].classList.remove('schedule__day--show');
  days[4].classList.remove('schedule__day--show');
  days[5].classList.remove('schedule__day--show');
  days[6].classList.remove('schedule__day--show');
  days[1].classList.add('schedule__day--show');
});
buttons[2].addEventListener('click', function() {
  buttons[0].classList.remove('schedule__days-button--current');
  buttons[1].classList.remove('schedule__days-button--current');
  buttons[3].classList.remove('schedule__days-button--current');
  buttons[4].classList.remove('schedule__days-button--current');
  buttons[5].classList.remove('schedule__days-button--current');
  buttons[6].classList.remove('schedule__days-button--current');
  buttons[2].classList.add('schedule__days-button--current');
  days[0].classList.remove('schedule__day--show');
  days[1].classList.remove('schedule__day--show');
  days[3].classList.remove('schedule__day--show');
  days[4].classList.remove('schedule__day--show');
  days[5].classList.remove('schedule__day--show');
  days[6].classList.remove('schedule__day--show');
  days[2].classList.add('schedule__day--show');
});
buttons[3].addEventListener('click', function() {
  buttons[0].classList.remove('schedule__days-button--current');
  buttons[1].classList.remove('schedule__days-button--current');
  buttons[2].classList.remove('schedule__days-button--current');
  buttons[4].classList.remove('schedule__days-button--current');
  buttons[5].classList.remove('schedule__days-button--current');
  buttons[6].classList.remove('schedule__days-button--current');
  buttons[3].classList.add('schedule__days-button--current');
  days[0].classList.remove('schedule__day--show');
  days[1].classList.remove('schedule__day--show');
  days[2].classList.remove('schedule__day--show');
  days[4].classList.remove('schedule__day--show');
  days[5].classList.remove('schedule__day--show');
  days[6].classList.remove('schedule__day--show');
  days[3].classList.add('schedule__day--show');
});
buttons[4].addEventListener('click', function() {
  buttons[0].classList.remove('schedule__days-button--current');
  buttons[1].classList.remove('schedule__days-button--current');
  buttons[2].classList.remove('schedule__days-button--current');
  buttons[3].classList.remove('schedule__days-button--current');
  buttons[5].classList.remove('schedule__days-button--current');
  buttons[6].classList.remove('schedule__days-button--current');
  buttons[4].classList.add('schedule__days-button--current');
  days[0].classList.remove('schedule__day--show');
  days[1].classList.remove('schedule__day--show');
  days[2].classList.remove('schedule__day--show');
  days[3].classList.remove('schedule__day--show');
  days[5].classList.remove('schedule__day--show');
  days[6].classList.remove('schedule__day--show');
  days[4].classList.add('schedule__day--show');
});
buttons[5].addEventListener('click', function() {
  buttons[0].classList.remove('schedule__days-button--current');
  buttons[1].classList.remove('schedule__days-button--current');
  buttons[2].classList.remove('schedule__days-button--current');
  buttons[3].classList.remove('schedule__days-button--current');
  buttons[4].classList.remove('schedule__days-button--current');
  buttons[6].classList.remove('schedule__days-button--current');
  buttons[5].classList.add('schedule__days-button--current');
  days[0].classList.remove('schedule__day--show');
  days[1].classList.remove('schedule__day--show');
  days[2].classList.remove('schedule__day--show');
  days[3].classList.remove('schedule__day--show');
  days[4].classList.remove('schedule__day--show');
  days[6].classList.remove('schedule__day--show');
  days[5].classList.add('schedule__day--show');
});
buttons[6].addEventListener('click', function() {
  buttons[0].classList.remove('schedule__days-button--current');
  buttons[1].classList.remove('schedule__days-button--current');
  buttons[2].classList.remove('schedule__days-button--current');
  buttons[3].classList.remove('schedule__days-button--current');
  buttons[4].classList.remove('schedule__days-button--current');
  buttons[5].classList.remove('schedule__days-button--current');
  buttons[6].classList.add('schedule__days-button--current');
  days[0].classList.remove('schedule__day--show');
  days[1].classList.remove('schedule__day--show');
  days[2].classList.remove('schedule__day--show');
  days[3].classList.remove('schedule__day--show');
  days[4].classList.remove('schedule__day--show');
  days[5].classList.remove('schedule__day--show');
  days[6].classList.add('schedule__day--show');
});


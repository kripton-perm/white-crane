$(document).ready(() => {
  const $scheduleSignup = $('.schedule__signup');
  const $scheduleModal = $('.schedule__modal');
  const $scheduleClose = $('.schedule__modal .signup__close');
  $scheduleSignup.on('click', () => {
    $scheduleModal.addClass('modal--show');
  });
  $scheduleClose.on('click', () => {
    $scheduleModal.removeClass('modal--show');
  });
});
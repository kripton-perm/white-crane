$(document).ready(function() {
  var $scheduleSignup = $('.schedule__signup');
  var $scheduleModal = $('.schedule__modal');
  var $scheduleClose = $('.schedule__modal .signup__close');
  $scheduleSignup.on('click', function() {
    $scheduleModal.addClass('modal--show');
  });
  $scheduleClose.on('click', function() {
    $scheduleModal.removeClass('modal--show');
  });
});

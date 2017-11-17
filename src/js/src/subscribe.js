$(document).ready(function() {
  var $buttonSignup = $('.button--signup');
  var $modalSignup = $('.signup');
  var $signupClose = $('.signup .signup__close');
  $buttonSignup.on('click', function() {
    $modalSignup.addClass('modal--show');
  });
  $signupClose.on('click', function() {
    $modalSignup.removeClass('modal--show');
  });
});

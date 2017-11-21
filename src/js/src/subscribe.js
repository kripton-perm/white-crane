$(document).ready(function() {
  var $buttonSignup = $('.button--signup');
  var $modalSignup = $('.signup');
  var $signupClose = $('.signup .signup__close');
  var $pageHeader = $('.page-header');
  $buttonSignup.on('click', function() {
    $modalSignup.addClass('modal--show');
    $pageHeader.css('z-index', '0');
  });
  $signupClose.on('click', function() {
    $modalSignup.removeClass('modal--show');
    $pageHeader.css('z-index', '2');
  });
});

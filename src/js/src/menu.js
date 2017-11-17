$(document).ready(() => {
  const $navMain = $('.main-nav');
  const $navToggle = $('.main-nav__toggle');
  $navMain.removeClass('main-nav--nojs');
  $navMain.removeClass('main-nav--open');
  $navMain.addClass('main-nav--close');
  $navToggle.on('click', () => {
    $navMain.toggleClass('main-nav--close');
    $navMain.toggleClass('main-nav--open');
  });
});
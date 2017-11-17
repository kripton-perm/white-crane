$(document).ready(function() {
  var $schedule = $('.schedule');
  var $scheduleButtons = $('.schedule__days-button');
  
  $schedule.removeClass('schedule--nojs');
  $scheduleButtons.on('click', function(event) {
    var $scheduleButtonCurrent = $('.schedule__days-button--current');
    var $dayShow = $('.schedule__day--show');
    $scheduleButtonCurrent.removeClass('schedule__days-button--current');
    $(event.currentTarget).addClass('schedule__days-button--current');
    var $day = $(event.currentTarget).parent().index();
    $dayShow.removeClass('schedule__day--show');
    if ($day == 0) {
      $('.schedule__day:nth-of-type(1)').addClass('schedule__day--show');
    } else if ($day == 1) {
      $('.schedule__day:nth-of-type(2)').addClass('schedule__day--show');
    } else if ($day == 2) {
      $('.schedule__day:nth-of-type(3)').addClass('schedule__day--show');
    } else if ($day == 3) {
      $('.schedule__day:nth-of-type(4)').addClass('schedule__day--show');
    } else if ($day == 4) {
      $('.schedule__day:nth-of-type(5)').addClass('schedule__day--show');
    } else if ($day == 5) {
      $('.schedule__day:nth-of-type(6)').addClass('schedule__day--show');
    } else if ($day == 6) {
      $('.schedule__day:nth-of-type(7)').addClass('schedule__day--show');
    }
  });
});
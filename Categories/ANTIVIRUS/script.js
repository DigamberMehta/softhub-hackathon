document.addEventListener("DOMContentLoaded", function() {
  // Set a timeout to hide the preloader after 2 seconds
  setTimeout(function() {
    var preloader = document.querySelector('.preloader');
    var lake = document.querySelector('.lake');

    preloader.style.display = 'none';
    lake.style.opacity = '1'; // Show the content
  }, 2000); // 2000 milliseconds = 2 seconds
});



$(document).ready(function(){
  var secondaryNavHeight = '59.2px';
  var originalMarginTop = '12px';

  $(".open-search").click(function(){
    $(".secondary-nav").fadeIn();
    $(".open-search").fadeOut();
    $(".Container.__top").animate({ 'margin-top' : secondaryNavHeight });
  });

  $("#new-close-search").click(function(){
    $(".secondary-nav").fadeOut(function() {
      $(".open-search").fadeIn();
      $(".Container.__top").animate({ 'margin-top' : originalMarginTop });
    });
  });

  $(window).resize(function(){
    if ($(window).width() > 810) {
      $(".secondary-nav").fadeOut();
      $(".Container.__top").animate({ 'margin-top' : originalMarginTop });
    } else {
      $(".open-search").fadeIn();
    }
  });
});
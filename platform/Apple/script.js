document.addEventListener("DOMContentLoaded", function() {
  // Set a timeout to hide the preloader after 2 seconds
  setTimeout(function() {
    var preloader = document.querySelector('.preloader');
    var lake = document.querySelector('.lake');

    preloader.style.display = 'none';
    lake.style.opacity = '1'; // Show the content
  }, 1000); // 2000 milliseconds = 2 seconds
});




// js for secondary nav bar open
$(document).ready(function(){
  var secondaryNavHeight = '19.2px';
  var originalMarginTop = '0px';

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






// scroll button position for mini-banners
document.getElementById('thirdRow').addEventListener('mouseover', function() {
  document.querySelectorAll('.scroll-button.left, .scroll-button.right').forEach(function(button) {
    button.style.top = '100px';
  });
});

document.getElementById('thirdRow').addEventListener('mouseout', function() {
  document.querySelectorAll('.scroll-button.left, .scroll-button.right').forEach(function(button) {
    button.style.top = '45px'; // Adjust this value to your desired default top position
  });
});



// acroll speed control
function scrollList(direction, container) {
  var scrollAmount = 600;
  if (direction === 'left') {
      container.scrollLeft -= scrollAmount;
  } else if (direction === 'right') {
      container.scrollLeft += scrollAmount;
  }
}


 $(document).ready(function() {
      var trendingCardApp = $(".card-container-list");
      var appDescriptionList = $(".app-descripition-list");

      trendingCardApp.on("scroll", function() {
        appDescriptionList.scrollLeft(trendingCardApp.scrollLeft());
      });
    });


    function googleTranslateElementInit() {
      new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');
    }
    
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
  var secondaryNavHeight = '15.2px';
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



 

// Get all star elements and review textarea
const stars = document.querySelectorAll('.rating-stars .star');
const reviewTextarea = document.querySelector('.review-textarea');

// Variable to store the selected rating
let selectedRating = 0;

// Event listeners for star rating
stars.forEach(star => {
  star.addEventListener('click', () => {
    const rating = parseInt(star.getAttribute('data-rating'));
    selectedRating = rating;
    highlightStars(rating);
  });
});

// Function to highlight stars based on selected rating
function highlightStars(starCount) {
  stars.forEach(star => {
    const rating = parseInt(star.getAttribute('data-rating'));
    if (rating <= starCount) {
      star.style.color = 'gold';
    } else {
      star.style.color = 'black';
    }
  });
}

// Function to submit review
function submitReview() {
  const reviewText = reviewTextarea.value;
  // You can add further validation or submission logic here
  if (selectedRating === 0) {
    alert('Please select a rating!');
    return;
  }
  if (reviewText.trim() === '') {
    alert('Please write a review!');
    return;
  }
  
  // For demonstration purposes, log the selected rating and review text
  console.log(`Rating: ${selectedRating}, Review: ${reviewText}`);
  // Here you can implement logic to submit the review to your backend
  // For example, you can make an API request to send the review data
}

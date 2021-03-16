// JavaScript Document

// ********** | NAVBAR | **********

function displayShop() {
    let displayShow = document.getElementById("displaynone")
    displayShow.style.display = "block"
}

function displayShopNone() {
    let displayShow = document.getElementById("displaynone")
    displayShow.style.display = "none"
}

/* Set the width of the side navigation to ... */
function openNav() {
    document.getElementById("shop_mob").style.width = "350px"
    document.getElementById("open_btn").style.display = "none"
    document.getElementById("close_btn").style.display = "Block"
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("shop_mob").style.width = "0px"
    document.getElementById("close_btn").style.display = "none"
    document.getElementById("open_btn").style.display = "block"
}

// ********** | TEXT SLIDER | **********

// var width = 100;
// var animation_speed = 700;
// var time_val = 3000;
// var current_slide = 1;

// var $slider = $('#slider');
// var $slide_container = $('.slides');
// var $slides = $('.slide');

// var interval;

// $slides.each(function(index){
//   $(this).css('left',(index*100)+'%');
// });

// function startSlider() {
//   interval = setInterval(function() {
//     $slide_container.animate({'left': '-='+(width+'%')}, animation_speed, function() {
//       if (++current_slide === $slides.length) {
//         current_slide = 1;
//         $slide_container.css('left', 0);
//       }
//     });
//   }, time_val);
// }

// startSlider();











var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
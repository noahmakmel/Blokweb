// JavaScript Document
// ********** | PRODUCT MOBILE SLIDER | **********

var slideIndex = 1;
showSlides(slideIndex);

function showSlides(n) {
  var i;
  const slides = document.getElementsByClassName("mySlides");
  //var dots = document.getElementsByClassName("dot");
  if(slides<1){return false}
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  // for (i = 0; i < dots.length; i++) {
  //     dots[i].className = dots[i].className.replace(" active", "");
  // }
  slides[slideIndex-1].style.display = "block";
  //dots[slideIndex-1].className += " active";
}

const prevAction = document.querySelector('#prev_action')
const nextAction = document.querySelector('#next_action')

prevAction.addEventListener('click', () => {
  showSlides(slideIndex += -1);
})
nextAction.addEventListener('click', () => {
  showSlides(slideIndex += 1);
})
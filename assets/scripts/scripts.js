// JavaScript Document
//General notes:
// https://www.youtube.com/watch?v=XgSjoHgy3Rk
// Var => function-scoped variables
//Let, const => block-scoped variables 
//Let global variable is not attached to window  objects. If you declare a global variable using var there is a case where the variable could be overwritten  Const is for a instant that never change, like PI. You can’t override it
// Arrow function : Parameter=> function { function syntax} (https://www.youtube.com/watch?v=h33Srr5J9nY)

// ********** | NAVBAR | **********

// variable declaration mageMenuAction(Menu Button) and mageMenuSection(Hidded Menu Block)
// querySelector is equal getElementById and getElementsByClassName
const mageMenuAction = document.querySelector("#mega_menu_action")
const mageMenuSection = document.querySelector(".navbar_shop_mega")
// Listening actions Mouse Enter and Mouse Leave and toggling CSS class .hidden (add or remove)
// https://www.w3schools.com/js/js_arrow_function.aspe Shortcut to not have to return
mageMenuAction.addEventListener("mouseenter", () => {
  mageMenuSection.style.display = "block"
	//	Displays an element as a block element (like <p>). It starts on a new line, and takes up the whole width
	// https://www.w3schools.com/cssref/pr_class_display.asp
})

// hide megamenu on mouseleave
mageMenuSection.addEventListener("mouseleave", () => {
  mageMenuSection.style.display = "none"
})

// Mobile Menu
// variable declaration 
const mobileMenuSection = document.querySelector(".short_mob")
const mobileMenuAction = document.querySelector(".hamburger")
// Listening actions and toggling to add the class "is-active"
// https://codepen.io/RRoberts/pen/ZBYaJr 
mobileMenuAction.addEventListener("click", () => {
  if(mobileMenuAction.classList.contains("is-active")){
    mobileMenuSection.style.width = "0em";
  }else{
    mobileMenuSection.style.width = "20em";
  }
  mobileMenuAction.classList.toggle("is-active");
})



// ********** | TEXT SLIDER | **********
// variable declaration 
// https://github.com/emdubb/jQuery_carousel_tutorial
// The slides are basicly a long rectangle and we're moving the "viewport" of the browser specificly to this part. Slide 1 is 100%, Slide 2 200% etc
// We want our slideshow to automatically run on an interval so we will use JavaScripts .setInterval() method. We want our slides to change every 5 seconds, so after the callback function we will set the duration to '5000
//Now that we have the slide, we want to move it to the left. We want to move it the full width of itself. Since we are making a responsive carousel we don't know exactly the width of the slide, so every time we run the interval we want to get the slides current width. We will do this with jQuery's .width() method.
const width = 100; // 100% slider width 
const time_val = 5000; // = 5 seconds
const slide_container = document.querySelector("#slider ul"); 
const slides = document.querySelectorAll("#slider li");
let current_slide = 0;
// each Slide changing styles 
slides.forEach(function(element, index) {
    element.style.left = `${index*100}%`  // collect all slides
});
// every 5 seconds the next slide moves
const interval = setInterval(function() {
    if (!slide_container) return false; // if no slides break function 
      slide_container.style.left =`-${current_slide*width}%`; // slide moving 
     if (current_slide == slides.length-1) { // checking  slider
       current_slide = 0; // if last slide return to 1st slide 
     }else{
       current_slide ++ // else take next one
     }
}, time_val); // repeat every 5 seconds 

// ********** | PRODUCT SECTION | **********
// function image url toggler 
function imgToggler(img,src) {
  if(img) {
       img.src = src;
  }
}
const mainCardImg1 = document.querySelector("#main_card_img1")
const mainCardImg2 = document.querySelector("#main_card_img2")
const mainCardImg3 = document.querySelector("#main_card_img3")
// if images existing Listening Acitions Mouse Enter and Mouse Leave same as NAVBAR 
// on hover change image src (link)
// https://javascript.info/mousemove-mouseover-mouseout-mouseenter-mouseleave
// https://www.youtube.com/watch?v=SGKXZUGe2sw (change image src)
// https://www.youtube.com/watch?v=Mku-RJ3FpFc (change image src)
if(mainCardImg1 && mainCardImg2 && mainCardImg3){
  mainCardImg1.addEventListener("mouseenter", () => {
    imgToggler(mainCardImg1,"./assets/images/img06.jpg")
  })
  mainCardImg1.addEventListener("mouseleave", () => {
    imgToggler(mainCardImg1,"./assets/images/img04.jpg")
  })
  mainCardImg2.addEventListener("mouseenter", () => {
    imgToggler(mainCardImg2,"./assets/images/img08.jpg")
  })
  mainCardImg2.addEventListener("mouseleave", () => {
    imgToggler(mainCardImg2,"./assets/images/img07.jpg")
  })
  mainCardImg3.addEventListener("mouseenter", () => {
    imgToggler(mainCardImg3,"./assets/images/img10.jpg")
  })
  mainCardImg3.addEventListener("mouseleave", () => {
    imgToggler(mainCardImg3,"./assets/images/img09.jpg")
  })
}



// ********** | PRODUCT MOBILE SLIDER | **********
// https://www.w3schools.com/howto/howto_js_slideshow.asp
// https://toolset.com/forums/topic/slideshow-using-w3-css-slideshow/
// https://www.c-sharpcorner.com/article/creating-an-image-slider-using-javascript-html-and-css-only/
var slideIndex = 1; // getting 1st slide 
const productSlides = document.querySelectorAll(".mobile_slider img"); // getting all slides  
const prevAction = document.querySelector(".prev")
const nextAction = document.querySelector(".next")

showSlides(slideIndex); // starting function
//const mobileMenuSection = document.querySelector(".short_mob")

//preparing all slides 
function showSlides(n) {
  var i;
  //var dots = document.getElementsByClassName("dot");
  if(productSlides.length<1){return false} // no slides - break function
  if (n > productSlides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = productSlides.length}
  for (i = 0; i < productSlides.length; i++) {
    productSlides[i].style.display = "none"; // hide all slides
  }
  // for (i = 0; i < dots.length; i++) {
  //     dots[i].className = dots[i].className.replace(" active", "");
  // }
  productSlides[slideIndex-1].style.display = "block"; // showing one slide (first, next, prev.)
  //dots[slideIndex-1].className += " active";
}

if(prevAction && nextAction){
  prevAction.addEventListener("click", () => {
    showSlides(slideIndex += -1); // call showSlides with Prev. Slide
  })
  nextAction.addEventListener("click", () => {
    showSlides(slideIndex += 1); // call showSlides with Next Slide
  })
}


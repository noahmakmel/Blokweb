// JavaScript Document

// ********** | NAVBAR | **********

// variable declaration mageMenuAction(Menu Button) and mageMenuSection(Hidded Menu Block)
// querySelector is equal getElementById and getElementsByClassName
const mageMenuAction = document.querySelector('#mega_menu_action')
const mageMenuSection = document.querySelector('.navbar_shop_mega')

// Listening actions Mouse Enter and Mouse Leave and toggling CSS class .hidden (add or remove)
mageMenuAction.addEventListener('mouseenter', () => {
  mageMenuSection.style.display = 'block'
})
mageMenuSection.addEventListener('mouseleave', () => {
  mageMenuSection.style.display = 'none'
})

// Mobile Menu
// variable declaration 
const mobileMenuSection = document.querySelector('.short_mob')
const openMobileMenuAction = document.querySelector('#open_btn')
const closeMobileMenuAction = document.querySelector('#close_btn')
// Listening actions and toggling classes the same as NAVBAR
openMobileMenuAction.addEventListener('click', () => {
  openMobileMenuAction.style.display = 'none';
  closeMobileMenuAction.style.display = 'block';
  mobileMenuSection.style.width = '20em';
})
closeMobileMenuAction.addEventListener('click', () => {
  openMobileMenuAction.style.display = 'block';
  closeMobileMenuAction.style.display = 'none';
  mobileMenuSection.style.width = '0';
})


// ********** | TEXT SLIDER | **********
// variable declaration 
const width = 100; // 100% slider width 
const time_val = 5000; // = 5 secons
const slide_container = document.querySelector("#slider ul"); 
const slides = document.querySelectorAll('#slider li');
let current_slide = 0;
// each Slide changing styles 
slides.forEach(function(element, index) {
    element.style.left = `${index*100}%`
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
const mainCardImg1 = document.querySelector('#main_card_img1')
const mainCardImg2 = document.querySelector('#main_card_img2')
const mainCardImg3 = document.querySelector('#main_card_img3')
// if images existing Listening Acitions Mouse Enter and Mouse Leave same as NAVBAR 
// on hover change image src (link)
if(mainCardImg1 && mainCardImg2 && mainCardImg3){
  mainCardImg1.addEventListener('mouseenter', () => {
    imgToggler(mainCardImg1,'./assets/images/img06.jpg')
  })
  mainCardImg1.addEventListener('mouseleave', () => {
    imgToggler(mainCardImg1,'./assets/images/img04.jpg')
  })
  mainCardImg2.addEventListener('mouseenter', () => {
    imgToggler(mainCardImg2,'./assets/images/img08.jpg')
  })
  mainCardImg2.addEventListener('mouseleave', () => {
    imgToggler(mainCardImg2,'./assets/images/img07.jpg')
  })
  mainCardImg3.addEventListener('mouseenter', () => {
    imgToggler(mainCardImg3,'./assets/images/img10.jpg')
  })
  mainCardImg3.addEventListener('mouseleave', () => {
    imgToggler(mainCardImg3,'./assets/images/img09.jpg')
  })
}



// ********** | PRODUCT MOBILE SLIDER | **********
var slideIndex = 1; // getting 1st slide 
showSlides(slideIndex); // strating function
//preparing all slides 
function showSlides(n) {
  var i;
  const slides = document.getElementsByClassName("mySlides"); // getting all slides
  //var dots = document.getElementsByClassName("dot");
  if(slides.length<1){return false} // no slides - break function
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; // hide all slides
  }
  // for (i = 0; i < dots.length; i++) {
  //     dots[i].className = dots[i].className.replace(" active", "");
  // }
  slides[slideIndex-1].style.display = "block"; // showing one slide (first, next, prev.)
  //dots[slideIndex-1].className += " active";
}

const prevAction = document.getElementById('prev_action')
const nextAction = document.getElementById('next_action')

if(prevAction && nextAction){
  prevAction.addEventListener('click', () => {
    showSlides(slideIndex += -1); // call showSlides with Prev. Slide
  })
  nextAction.addEventListener('click', () => {
    showSlides(slideIndex += 1); // call showSlides with Next Slide
  })
}


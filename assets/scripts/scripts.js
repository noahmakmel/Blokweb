// JavaScript Document

// ********** | NAVBAR | **********
// Mega Menu
const mageMenuAction = document.querySelector('#mega_menu_action')
const mageMenuSection = document.querySelector('#navbar_shop_mega')

mageMenuAction.addEventListener('mouseenter', () => {
  mageMenuSection.classList.toggle('hidden')
})
mageMenuSection.addEventListener('mouseleave', () => {
  mageMenuSection.classList.toggle('hidden')
})

// Mobile Menu
const mobileMenuSection = document.querySelector('#shop_mob')
const openMobileMenuAction = document.querySelector('#open_btn')
const closeMobileMenuAction = document.querySelector('#close_btn')

openMobileMenuAction.addEventListener('click', () => {
  openMobileMenuAction.classList.toggle('hidden')
  closeMobileMenuAction.classList.toggle('hidden')
  mobileMenuSection.classList.toggle('is_open')
})
closeMobileMenuAction.addEventListener('click', () => {
  openMobileMenuAction.classList.toggle('hidden')
  closeMobileMenuAction.classList.toggle('hidden')
  mobileMenuSection.classList.toggle('is_open')
})


// ********** | TEXT SLIDER | **********
const width = 100;
const time_val = 5000;
const slide_container = document.querySelector(".slides");
const slides = document.querySelectorAll('.slide');
let current_slide = 0;

slides.forEach(function(element, index) {
    element.style.left = `${index*100}%`
});

const interval = setInterval(function() {
    if (!slide_container) return false;
      slide_container.style.left =`-${current_slide*width}%`;
     if (current_slide == slides.length-1) {
       current_slide = 0;
     }else{
       current_slide ++
     }
}, time_val);

// ********** | PRODUCT SECTION | **********
function imgToggler(img,src) {
  if(img) {
       img.src = src;
  }
}
const mainCardImg1 = document.querySelector('#main_card_img1')
const mainCardImg2 = document.querySelector('#main_card_img2')
const mainCardImg3 = document.querySelector('#main_card_img3')

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
var slideIndex = 1;
showSlides(slideIndex);

function showSlides(n) {
  var i;
  const slides = document.getElementsByClassName("mySlides");
  //var dots = document.getElementsByClassName("dot");
  if(slides.length<1){return false}
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

const prevAction = document.getElementById('prev_action')
const nextAction = document.getElementById('next_action')

if(prevAction && nextAction){
  prevAction.addEventListener('click', () => {
    showSlides(slideIndex += -1);
  })
  nextAction.addEventListener('click', () => {
    showSlides(slideIndex += 1);
  })
}


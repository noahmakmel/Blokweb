// JavaScript Document

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
      slide_container.style.left =`-${current_slide*width}%`;
     if (current_slide == slides.length-1) {
       current_slide = 0;
     }else{
       current_slide ++
     }
}, time_val);

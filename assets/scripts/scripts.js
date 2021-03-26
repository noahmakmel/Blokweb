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
/* SHOW MENU */
const navMenu = document.querySelector("#nav-menu");
const navToggle = document.querySelector("#nav-toggle");
const navClose = document.querySelector("#nav-close");

/* Validation */

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

//Menu Hidden
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}
//remove mobile menu

const navLinks = document.querySelectorAll(".nav__link");

function linkAction() {
    
  navMenu.classList.remove("show-menu");
}
navLinks.forEach(n => n.addEventListener("click", linkAction));

//change header background

function ScrollHeader() {
    const navMenu = document.querySelector("#nav-menu");
  const header = document.querySelector("header");

  if (this.scrollY >= 50) header.classList.add("scroll-header"); else header.classList.remove("scroll-header");
  
}
window.addEventListener("scroll", ScrollHeader);
//scroll

function scrollUp (){

  const scrollUp = document.querySelector("#scroll-up")

  if(this.scrollY >= 200) scrollUp.classList.add("show-scroll"); else scrollUp.classList.remove("show-scroll")

}
window.addEventListener("scroll", scrollUp);

/*SCROLL REVEAL */
const sr = ScrollReveal({
  distance: '60px',
  duration: 2500,
  delay: 400,
  //reset:true
})

sr.reveal(`.home__header, .section__title`, {delay:600})
sr.reveal(`.home__footer`, {delay:700})
sr.reveal(`.home__image`, {delay:900, origin:'top'})

sr.reveal('.sponsor__img, .products__card, .footer__logo, .footer__content, .footer__copy',{origin:'top', interval:100})
sr.reveal('.specs__data, .discount__animate',{origin:'left', interval:100})
sr.reveal('.specs__img, .discount__imf',{origin:'right', interval:100})
sr.reveal('.case__img',{origin:'top'})
sr.reveal('.cada__data')
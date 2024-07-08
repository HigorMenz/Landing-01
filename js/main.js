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

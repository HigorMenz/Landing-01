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

const navLink = document.querySelector(".nav__link")


function linkAction(){
    navMenu.classList.remove("show-menu")
}
navLink.forEach(n => n.addEventListener('click', linkAction))

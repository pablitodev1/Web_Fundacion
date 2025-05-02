// Script para menu responsivo HEADER//
const burger = document.querySelector(".burger");
const navMenu = document.querySelector(".menu_navbar");

    burger.addEventListener("click", mobileMenu);

function mobileMenu() {
    burger.classList.toggle("active");
    navMenu.classList.toggle("active"); 
}


const navLink = document.querySelectorAll(".nav_link");

    navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    burger.classList.remove("active");
    navMenu.classList.remove("active");
}

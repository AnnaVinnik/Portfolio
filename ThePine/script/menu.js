"use strict";

const body = document.querySelector("body");
const nav = document.querySelector(".nav");
const navButton = document.querySelector(".nav__button");
const navItems = document.querySelector(".nav__items");

nav.addEventListener("click", () => {
    navItems.style.display = "flex";
});

navItems.addEventListener("mouseleave", () => {
    navItems.style.display = "none";
});

body.addEventListener("click", (event) => {
    if (!event.target.classList.contains("nav__button") && 
        !event.target.classList.contains("nav__item") &&
        !event.target.classList.contains("nav__items")
        ) {
        navItems.style.display = "none";
    }
});
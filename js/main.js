const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const header = document.querySelector("header")
const navLinks = document.querySelectorAll(".nav-link")
const themeToggle = document.getElementById("theme-checkbox");
const images = document.querySelectorAll(".column-cover img");
const prefersTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
let count = 1;

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    header.classList.toggle("active");
}

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    header.classList.remove("active");
}

function themeControl() {
    const dataTheme = document.querySelector("html").getAttribute("data-theme") || prefersTheme;
    if (dataTheme === "light") {
        document.querySelector("html").setAttribute("data-theme", "dark");
        images.forEach(img => {
            img.src = img.getAttribute("data-dark-src");
        });
    } else {
        document.querySelector("html").setAttribute("data-theme", "light");
        images.forEach(img => {
            img.src = img.getAttribute("data-light-src");;
        });
    }
}

if (navLinks.length >= 2) {
    const secondNavLink = navLinks[1];

    secondNavLink.addEventListener("click", function() {
        if (count === 2) {
            secondNavLink.href = "#about-2";
            count = 1;
        }
        else {
            secondNavLink.href = "#about-1";
            count = 2;
        }
        console.log("Second .nav-link clicked");
    });
} else {
    console.log("Less than two .nav-link elements found");
}

if (prefersTheme === "dark") {
    images.forEach(img => {
        img.src = img.getAttribute("data-dark-src");
    });
}
else {
    images.forEach(img => {
        img.src = img.getAttribute("data-light-src");
    });
}

themeToggle.addEventListener("click", themeControl);
hamburger.addEventListener("click", mobileMenu);
navLinks.forEach(n => n.addEventListener("click", closeMenu));

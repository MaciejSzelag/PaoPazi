const section_top = document.getElementById("section-top");
const nav_bar = document.getElementById("nav_bar");

//scroll
window.addEventListener("scroll", () => {
    if (document.documentElement.scrollTop > section_top.clientHeight ) {
        nav_bar.classList.add("bg-scrolled");
    } else {;
        nav_bar.classList.remove("bg-scrolled");
    }

})

const hamburger_wrap = document.querySelector(".h-wrap");
const menu_wrap = document.querySelector(".ul-wrap");
let active = false;

const bars = document.querySelector(".h-wrap");

hamburger_wrap.addEventListener("click", () => {
    if (!active) {
        menu_wrap.classList.add("show-menu");
        bars.classList.add("active-menu")
        setTimeout(() => {
            bars.classList.add("a-m-rotate")
        }, 400);
        active = !active
    } else if (active) {
        menu_wrap.classList.remove("show-menu");
        bars.classList.remove("a-m-rotate")
        setTimeout(() => {
            bars.classList.remove("active-menu")
        }, 400);
        active = !active
    }
   
})
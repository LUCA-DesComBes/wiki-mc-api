const nav = document.querySelector("nav");
const menuBurger = document.querySelector(".imgMenuBurger");

menuBurger.addEventListener("click", () => {
    nav.classList.add("active");
});
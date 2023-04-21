const btn = document.querySelector(".boy__button");
const input = document.querySelector(".boy__input");
const button = document.querySelector(".scroll");
const header = document.querySelector(".header__block");
const fixed = document.querySelector("header");
const body = document.querySelector("main");
const menu = document.querySelector(".header-burger");
const ul = document.querySelector(".header__list");
const crost = document.querySelector(".crost");
const profile = document.querySelector(".header__right__img");
const modal = document.querySelector(".modal");
const modalImg = document.querySelector(".modal__img");
const modalsingin = document.querySelector(".modal__singin");
const modal__btn = document.querySelector(".modal__ancer");
const modal__img__singin = document.querySelector(".modal__img__singin");
modal__img__singin.addEventListener("click", (ev) => {
  modalsingin.classList.toggle("modal__aside__block");
  modal.style.display = "none";
  body.style.filter = "none";
});
body.addEventListener("click", (el) => {
  body.style.filter = "none";
  modal.style.display = "none";
});
body.addEventListener("click", (el) => {
  modalsingin.style.display = "none";
  body.style.filter = "none";
});
modal__btn.addEventListener("click", (el) => {
  modalsingin.classList.toggle("modal__aside__block");
});
modalImg.addEventListener("click", (el) => {
  modal.classList.toggle("modal__block");
  body.style.filter = "none";
});
profile.addEventListener("click", (ev) => {
  modal.classList.add("modal__block");
  body.style.filter = "blur(10px)";
});
menu.addEventListener("click", (el) => {
  ul.classList.toggle("burger");
});
crost.addEventListener("click", (ev) => {
  ul.classList.remove("burger");
});
window.addEventListener("scroll", (el) => {
  if (scrollY >= 50) {
    fixed.classList.add("header__fixed");
  } else {
    fixed.classList.remove("header__fixed");
  }
});
window.addEventListener("scroll", (el) => {
  let scrol = this.scrollY;
  if (this.scrollY >= 100) {
    button.classList.add("add");
  } else if (this.scrollY < 500) {
    button.classList.remove("add");
  }
});
window.addEventListener("scroll", () => {
  header.classList.toggle("sticky", window.scrollY >= 0);
});
input.style.display = "none";
btn.style.display = "block";
btn.style.cssText = "align-items:center";
btn.addEventListener("click", (el) => {
  if (input.style.display == "none") {
    input.style.display = "block";
  }
});
btn.addEventListener("click", (el) => {
  if ((btn.style.display = "block")) {
    btn.style.display = "none";
  }
});
button.addEventListener("click", () => {
  scrollTo(0, 0);
});
console.log(scrollY);





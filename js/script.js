"use strict";

let menu = document.querySelector("#menubar");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
};

/****************MODAL FUNCTIONALITY*******************************/

// open modal

const cards = document.querySelectorAll("[data-open]");
const hide = "hidden";

for (const card of cards) {
  card.addEventListener("click", function () {
    const modal = this.nextElementSibling;
    modal.classList.remove(hide);

    const overlay = modal.nextElementSibling;
    overlay.classList.remove(hide);
  });
}

// close modal
const closeModalButtons = document.querySelectorAll("[data-close]");
for (const btn of closeModalButtons) {
  btn.addEventListener("click", function () {
    const modal = this.parentElement;
    modal.classList.add(hide);

    const overlay = modal.nextElementSibling;
    overlay.classList.add(hide);
  });
}

/************swiper*****************************/
// var swiper = new Swiper(".about-slider", {
//     spaceBetween: 30,
//     centeredSlides: true,
//     autoplay: {
//       delay: 7500,
//       disableOnInteraction: false,
//     },
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//     },
//     loop:true,
//   });

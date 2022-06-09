"use strict";

//navbar menu
const menuIcon = document.querySelector(".navbar-toggler");

//side navbar
const closeBtn = document.querySelector(".close-btn");
const sideNavBar = document.querySelector("#sideNavbar");
const overlay = document.querySelector(".overlay");
const sideNavBtns = document.querySelectorAll(".side-link");

//open side navbar
menuIcon.addEventListener("click", openSideNavbar);

//close side navbar
closeBtn.addEventListener("click", closeSideNavbar);


// hide sidenavbar when the navigation link is clicked
const btns = [...sideNavBtns];
for (const btn of btns) {
    btn.addEventListener("click", closeSideNavbar);
}

//openSidenavbar function
function openSideNavbar() {
   sideNavBar.classList.add("show");
   overlay.classList.remove("hide");
}
  
//closeNavbar function
function closeSideNavbar() {
// hide overlay and sidenavbar
  overlay.classList.add("hide");
  sideNavBar.classList.remove("show");
 }

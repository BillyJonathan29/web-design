// hamburger

// const hamburger = document.querySelector("#hamburger");
// const navMenu = document.querySelector("#nav-menu");

// hamburger.addEventListener("click", function () {
//   hamburger.classList.toggle("hamburger-active");
//   navMenu.classList.toggle("hidden");
// });

const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");
const lines = document.querySelectorAll(".hamburger-icons");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("hidden");
  lines.forEach((line) => line.classList.toggle("active"));
});

// navbar fixed

window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;

  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
  } else {
    header.classList.remove("navbar-fixed");
  }
};

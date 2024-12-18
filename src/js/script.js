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


// Check if the URL path matches any known routes
const validRoutes = [
  '/', 
  '/index.html', 
  '/contact.html', 
  '/e-code/web-responsive/1.html',
  '/e-code/web-responsive/2.html',
  '/e-code/web-responsive/3.html',
  '/e-code/css/1.html',
  '/e-code/css/2.html',
  '/e-code/css/3.html',
  '/e-code/html/1.html',
  '/e-code/html/2.html',
  '/e-code/html/3.html',
  '/e-code/html/4.html',
  '/e-code/html/5.html',
  '/e-code/html/6.html',
];
if (!validRoutes.includes(window.location.pathname)) {
  return window.location.href = '/404.html'; // Redirect to the 404 page
}


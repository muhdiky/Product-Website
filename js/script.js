// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");
//ketika tape menu di click
document.querySelector("#tape-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

//Klik diluar untuk menghilangkan nav
const tape = document.querySelector("#tape-menu");

document.addEventListener("click", function (e) {
  if (!tape.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

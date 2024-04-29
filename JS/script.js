// Navbar Start
let menu = document.querySelector("#menu-bars");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
};

window.onscroll = () => {
  menu.classList.remove("fa-times");
  navbar.classList.remove("active");
};

// Navbar End

// Download CV Start

let cv = document.getElementById("downloadCV");

cv.onclick = () => {
  window.location.href="https://kelioxenelly.github.io/UTS-KelioXenelly-23110001-STI/assets/Curriculum Vitae - Kelio Xenelly.pdf"
};

// Download CV End

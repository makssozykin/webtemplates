const menuToggle = document.querySelector(".toggle");
const menu = document.querySelector(".menu");
const list = document.querySelectorAll("li");

menuToggle.addEventListener("click", onClick);

function onClick() {
  menu.classList.toggle("active");
  menuToggle.classList.toggle("active");
}

function activeLink() {
  list.forEach((item) => item.classList.remove("active"));
  this.classList.add("active");
}

list.forEach((item) => item.addEventListener("click", activeLink));

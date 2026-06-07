let menuIcon = document.querySelector(".menu-icon");
let appBar = document.querySelector(".app-bar");
menuIcon.addEventListener("click", function () {
  appBar.classList.toggle("active");
});

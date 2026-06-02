let addButton = document.querySelector(".addButton");
let skillInput = document.getElementById("skillInput");
let coreSkills = document.querySelector(".core-skills .skill-list");
let otherSkills = document.querySelector(".other-skills .skill-list");
let coreButton = document.querySelector(".coreButton");
let otherButton = document.querySelector(".otherButton");
let categoryText = document.querySelector(".categoryText");
let category = "core";

coreButton.addEventListener("click", function () {
  category = "core";
  categoryText.innerText = "Add Core Skills";
});
otherButton.addEventListener("click", function () {
  category = "other";
  categoryText.innerText = "Add Other Skills";
});
addButton.addEventListener("click", function () {
  if (category == "core") {
    coreSkills.innerHTML += `<button class="skill-btn">${skillInput.value}</button>`;
  } else {
    otherSkills.innerHTML += `<button class="skill-btn">${skillInput.value}</button>`;
  }
  skillInput.value = "";
});

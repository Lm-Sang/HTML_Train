let button = document.querySelector("button");
let colorInput = document.getElementById("colorInput");
let widthInput = document.getElementById("widthInput");
let heightInput = document.getElementById("heightInput");
let box2 = document.querySelector(".box2");
button.addEventListener("click", function () {
  if (
    colorInput.value == "" ||
    widthInput.value == "" ||
    heightInput.value == ""
  ) {
    alert("Vui lòng nhập đầy đủ thông tin");
    return;
  }
  box2.style.backgroundColor = colorInput.value;
  box2.style.width = widthInput.value + "px";
  box2.style.height = heightInput.value + "px";
});
box2.addEventListener("click", function () {
  colorInput.value = "";
  widthInput.value = "";
  heightInput.value = "";
  box2.style.backgroundColor = "transparent";
});

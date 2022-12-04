function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeButton = document.querySelector(".change-color");
const color = document.querySelector(".color");
const changeBody = document.querySelector("body");

changeButton.addEventListener("click", () => {
  color.textContent = getRandomHexColor();
  changeBody.style.backgroundColor = color.textContent;
});



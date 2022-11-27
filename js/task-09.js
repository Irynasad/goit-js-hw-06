const refs = {
  body: document.querySelector("body"),
  span: document.querySelector(".color"),
  buttom: document.querySelector(".change-color"),
};

refs.buttom.addEventListener("click", onBackgraundColorChange);

function onBackgraundColorChange() {
  refs.body.style.backgroundColor = getRandomHexColor();
  refs.span.textContent = `${getRandomHexColor()}`;
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

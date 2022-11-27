const refs = {
  body: document.querySelector("body"),
  span: document.querySelector(".color"),
  buttom: document.querySelector(".change-color"),
};

refs.buttom.addEventListener("click", onBackgraundColorChange);

function onBackgraundColorChange() {
  const RandomColor = getRandomHexColor();
  refs.body.style.backgroundColor = RandomColor;
  refs.span.textContent = `${RandomColor}`;
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

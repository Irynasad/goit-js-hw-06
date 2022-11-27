const refs = {
  input: document.querySelector("input"),
  btnCreate: document.querySelector("button[data-create]"),
  btnDestroy: document.querySelector("button[data-destroy]"),
  boxes: document.querySelector("#boxes"),
};

refs.btnCreate.addEventListener("click", createBoxes);

function createBoxes() {
  const amount = refs.input.value;
  let step = 10;
  let height = 30;
  let width = 30;
  for (let i = 0; i < amount; i++) {
    const nextBox = document.createElement("div");
    nextBox.style.backgroundColor = getRandomHexColor();
    nextBox.style.height = `${height}px`;
    nextBox.style.width = `${width}px`;
    height += step;
    width += step;
    refs.boxes.append(nextBox);
  }
}
refs.btnDestroy.addEventListener("click", destroyBoxes);
function destroyBoxes() {
  refs.boxes.innerHTML = "";
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

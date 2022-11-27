const decrementBtn = document.querySelector("[data-action=decrement]");
const incrementBtn = document.querySelector("[data-action=increment]");
const valueEl = document.querySelector("#value");

let counterValue = 0;

const onDecrementBtnClick = () => {
  counterValue -= 1;
  valueEl.textContent = counterValue;
};

const onIncrementBtnClick = () => {
  counterValue += 1;
  valueEl.textContent = counterValue;
};

decrementBtn.addEventListener("click", onDecrementBtnClick);
incrementBtn.addEventListener("click", onIncrementBtnClick);

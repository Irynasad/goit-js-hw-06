const inputEl = document.querySelector("#validation-input");
const inputLength = Number(inputEl.dataset.length);

inputEl.addEventListener("blur", onBlur);

function onBlur(event) {
  const input = event.currentTarget;
  input.classList.remove("valid", "invalid");

  if (input.value.length === inputLength) {
    input.classList.add("valid");
  } else {
    input.classList.add("invalid");
  }
}

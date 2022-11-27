const refs = {
  inputEl: document.querySelector("#name-input"),
  spanEl: document.querySelector("#name-output"),
};
console.log(refs);

refs.inputEl.addEventListener("input", onInputCange);

function onInputCange(event) {
  refs.spanEl.textContent =
    event.currentTarget.value.trim() !== ""
      ? event.currentTarget.value
      : "Anonymous";
}

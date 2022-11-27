const refs = {
  input: document.querySelector("#font-size-control"),
  span: document.querySelector("#text"),
};

function onFontChange(event) {
  refs.span.style.fontSize = `${Number(event.target.value)}px`;
}

refs.input.addEventListener("click", onFontChange);

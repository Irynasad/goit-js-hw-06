const refs = {
  form: document.querySelector(".login-form"),
};

refs.form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  const user = {};
  user.email = email.value;
  user.password = password.value;

  if (email.value !== "" && password.value !== "") {
    console.log(user);
  } else {
    alert("Все поля формы должны быть заполнены");
  }
  refs.form.reset();
}

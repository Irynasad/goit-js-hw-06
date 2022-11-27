const refs = {
  form: document.querySelector(".login-form"),
};

refs.form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    alert("Все поля формы должны быть заполнены");
    return;
  } else {
    const user = {};
    user.email = email.value;
    user.password = password.value;
    console.log(user);
  }
  refs.form.reset();
}

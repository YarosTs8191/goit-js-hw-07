document
  .querySelector(".login-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Запобігаємо перезавантаженню сторінки

    const form = event.currentTarget;
    const email = form.elements.email.value.trim();
    const password = form.elements.password.value.trim();

    if (!email || !password) {
      alert("All form fields must be filled in");
      return;
    }

    const formData = {
      email,
      password,
    };

    console.log(formData);
    form.reset(); // Очищуємо форму після успішного сабміту
  });

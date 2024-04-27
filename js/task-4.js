// loginForm.addEventListener('submit', function(event) {
//   event.preventDefault();

//   const emailInput = this.elements['email'];
//   const passwordInput = this.elements['password'];

//   const emailValue = emailInput.value.trim();
//   const passwordValue = passwordInput.value.trim();

//   if (!emailValue || !passwordValue) {
//     alert('All form fields must be filled in');
//     return;
//   }

//   const formData = {
//     email: emailValue,
//     password: passwordValue
//   };

//   console.log(formData);

//   this.reset();
// });
const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const { email, password } = this.elements;
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  if (!emailValue || !passwordValue) {
    alert('All form fields must be filled in');
    return;
  }

  const formData = {
    email: emailValue,
    password: passwordValue
  };

  console.log(formData);

  email.value = '';
  password.value = '';
});

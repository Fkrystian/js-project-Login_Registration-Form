const loginPasswordInput = document.querySelector('.form__login-input-password');
const loginPasswordIcon = document.querySelector('.form__input-box-ico-visibility');

// Calls
loginPasswordIcon.addEventListener('click', function() {
  const type = loginPasswordInput.getAttribute("type") === "password" ? "text" : "password";
  loginPasswordInput.setAttribute("type", type);
  type === "text" ? loginPasswordIcon.innerHTML = 'visibility_off' : loginPasswordIcon.innerHTML = 'visibility';
})
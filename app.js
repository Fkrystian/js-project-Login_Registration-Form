const loginPasswordInput = document.querySelector('.form__login-input-password');
const loginPasswordIcon = document.querySelector('.form__input-box-ico-visibility');
const signUpPasswordInput = document.querySelector('#sign-up-password');
const paswordStrengthContainer = document.querySelector('#password__strength-container');
const passwordMessagesContainer = document.querySelector('#password__errors-messages');
//Function 
const checkPasswordStrength = function checkPasswordStrength(input){
  const password = input.value;
  
  // Tests
  const lengthCheck = password.length >= 5 && password.length <=20;
  const upperCaseCheck = /[A-Z]/.test(password);
  const lowerCaseCheck = /[a-z]/.test(password); 
  const symbolCheck = /[\W_]/.test(password);
  const numberCheck = /\d/.test(password);

  // Messages
  const emptyMessage = '';
  const lengthMessage = `<p class="password__errors-message">Password should be between 5 and 20 symbols</p>`;
  const upperCaseMessage = `<p class="password__errors-message">Password require at least one capital letter</p>`;
  const lowerCaseMessage = `<p class="password__errors-message">Password require at least one lower case letter</p>`;
  const symbolMessage = `<p class="password__errors-message">Password require at least one symbol</p>`;
  const numberMessage = `<p class="password__errors-message">Password require at least one number</p>`;

  // Checks and messages display
  passwordMessagesContainer.innerHTML = '';
  !lengthCheck ? passwordMessagesContainer.insertAdjacentHTML('afterbegin', lengthMessage) : passwordMessagesContainer.insertAdjacentHTML('afterbegin', emptyMessage); 
  !upperCaseCheck ? passwordMessagesContainer.insertAdjacentHTML('afterbegin', upperCaseMessage) : passwordMessagesContainer.insertAdjacentHTML('afterbegin', emptyMessage); 
  !lowerCaseCheck ? passwordMessagesContainer.insertAdjacentHTML('afterbegin', lowerCaseMessage) : passwordMessagesContainer.insertAdjacentHTML('afterbegin', emptyMessage); 
  !symbolCheck ? passwordMessagesContainer.insertAdjacentHTML('afterbegin', symbolMessage) : passwordMessagesContainer.insertAdjacentHTML('afterbegin', emptyMessage); 
  !numberCheck ? passwordMessagesContainer.insertAdjacentHTML('afterbegin', numberMessage) : passwordMessagesContainer.insertAdjacentHTML('afterbegin', emptyMessage); 

  // Password strength display
}

// Calls
loginPasswordIcon.addEventListener('click', function() {
  const type = loginPasswordInput.getAttribute("type") === "password" ? "text" : "password";
  loginPasswordInput.setAttribute("type", type);
  type === "text" ? loginPasswordIcon.innerHTML = 'visibility_off' : loginPasswordIcon.innerHTML = 'visibility';
})

signUpPasswordInput.addEventListener('input', function(){
  checkPasswordStrength(signUpPasswordInput);
})
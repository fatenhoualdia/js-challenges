const passwordInput = document.getElementById('password');
const toggleButton = document.getElementById('toggle-password');

let isPasswordVisible = false

toggleButton.addEventListener('click', function () {
  isPasswordVisible = !isPasswordVisible
  if (isPasswordVisible) {
    passwordInput.type = 'text'
    toggleButton.src = 'eye-open.png' 
    toggleButton.alt = 'Hide Password'
  } else {
    passwordInput.type = 'password'
    toggleButton.src = 'eye-close.png' 
    toggleButton.alt = 'Show Password'
  }
});
// Get the elements
const signUpCheckbox = document.getElementById("sign-up");
const additionalFields = document.getElementById("additional-fields");

// Event listener for the "Sign Up" checkbox
signUpCheckbox.addEventListener("change", function() {
    if (this.checked) {
        // Show additional fields when checkbox is checked
        additionalFields.style.display = "block";
    } else {
        // Hide additional fields when checkbox is unchecked
        additionalFields.style.display = "none";
    }
});

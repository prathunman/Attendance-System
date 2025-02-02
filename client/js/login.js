const forms = document.querySelector(".forms"),
  pwShowHide = document.querySelectorAll(".eye-icon"),
  links = document.querySelectorAll(".link"),
  loginForm = document.querySelector(".form.login form"),
  signupForm = document.querySelector(".form.signup form");

// Show/Hide Password
pwShowHide.forEach((eyeIcon) => {
  eyeIcon.addEventListener("click", () => {
    let pwFields = eyeIcon.parentElement.parentElement.querySelectorAll(".password");

    pwFields.forEach((password) => {
      if (password.type === "password") {
        password.type = "text";
        eyeIcon.classList.replace("bx-hide", "bx-show");
      } else {
        password.type = "password";
        eyeIcon.classList.replace("bx-show", "bx-hide");
      }
    });
  });
});

// Toggle Between Login & Signup Forms
links.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    forms.classList.toggle("show-signup");
  });
});

const emailInputs = document.querySelectorAll(".emailInput");
const passwordInputs = document.querySelectorAll(".passwordInput");

function validateEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}

emailInputs.forEach(emailInput => {
  emailInput.addEventListener("input", function () {
    if (validateEmail(emailInput.value)) {
      emailInput.style.borderColor = "green";
    } else {
      emailInput.style.borderColor = "red";
    }
  });
});

passwordInputs.forEach(passwordInput => {
  passwordInput.addEventListener("input", function () {
    if (passwordInput.value.length > 7) {
      passwordInput.style.borderColor = "green";
    } else {
      passwordInput.style.borderColor = "red";
    }
  });
});

// Function to handle login
loginForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = loginForm.querySelector(".emailInput").value;
  const password = loginForm.querySelector(".passwordInput").value;

  if (validateEmail(email) === true && password.length > 7) {
    console.log("Calling login API");
  } else {
    alert("Invalid email or password. Please try again.");
  }
});

// Function to handle signup
signupForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const username = signupForm.querySelector(".usernameInput").value;
  const email = signupForm.querySelector(".emailInput").value;
  const password = signupForm.querySelector(".passwordInput").value;

  if(validateEmail(email) === true) {
    console.log("Calling signup API");
  } else {
    alert("Invalid email. Please try again.");
  }
});


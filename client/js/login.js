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
    try {
      const response = await fetch(`${API_BASE_URL}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.text();

      if (response.ok) {
        // Store JWT Token in Local Storage
        sessionStorage.setItem("jwtToken", data);
        window.location.href = "home.html"; 
      } else {
        alert(`Login failed: ${data.message}`);
      }
    } catch (error) {
      alert("An error occurred. Please try again later.");
    }
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
    try {
      const response = await fetch(`${API_BASE_URL}/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, email, password }),
      });
  
      const data = await response.text();
  
      if (response.ok) {
        alert("Signup successful! Please log in.");
        forms.classList.remove("show-signup"); 
      } else {
        alert(`Signup failed: ${data.message}`);
      }
    } catch (error) {
      alert("An error occurred. Please try again.");
    }
  } else {
    alert("Invalid email. Please try again.");
  }
});

// Check if the user is already logged in
document.addEventListener("DOMContentLoaded", () => {
  if (sessionStorage.getItem("jwtToken")) {
    window.location.href = "home.html";
  }
});
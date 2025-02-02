const forms = document.querySelector(".forms"),
      pwShowHide = document.querySelectorAll(".eye-icon"),
      links = document.querySelectorAll(".link"),
      loginForm = document.querySelector(".form.login form"),
      signupForm = document.querySelector(".form.signup form");

// Show/Hide Password
pwShowHide.forEach(eyeIcon => {
    eyeIcon.addEventListener("click", () => {
        let pwFields = eyeIcon.parentElement.parentElement.querySelectorAll(".password");
        
        pwFields.forEach(password => {
            if(password.type === "password"){
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
links.forEach(link => {
    link.addEventListener("click", e => {
       e.preventDefault();
       forms.classList.toggle("show-signup");
    });
});
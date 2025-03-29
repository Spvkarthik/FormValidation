document.getElementById("myForm").addEventListener("submit", function(event) {
    if (!validateForm()) {
        event.preventDefault();
    }
});

function validateName() {
    let name = document.getElementById("fullName").value;
    let error = document.getElementById("nameError");
    error.textContent = name.length < 5 ? "Name must be at least 5 characters." : "";
}

function validateEmail() {
    let email = document.getElementById("email").value;
    let error = document.getElementById("emailError");
    error.textContent = email.includes("@") ? "" : "Enter a valid email.";
}

function validatePhone() {
    let phone = document.getElementById("phone").value;
    let error = document.getElementById("phoneError");
    error.textContent = /^\d{10}$/.test(phone) && phone !== "1234567890" ? "" : "Enter a valid 10-digit phone number.";
}

function validatePassword() {
    let password = document.getElementById("password").value;
    let name = document.getElementById("fullName").value;
    let error = document.getElementById("passwordError");
    if (password.length < 8 || password.toLowerCase() === "password" || password === name) {
        error.textContent = "Password must be at least 8 characters and not be 'password' or your name.";
    } else {
        error.textContent = "";
    }
}

function validateConfirmPassword() {
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    let error = document.getElementById("confirmPasswordError");
    error.textContent = password === confirmPassword ? "" : "Passwords do not match.";
}

function validateForm() {
    validateName();
    validateEmail();
    validatePhone();
    validatePassword();
    validateConfirmPassword();
    
    let errors = document.querySelectorAll(".error");
    for (let error of errors) {
        if (error.textContent) return false;
    }
    return true;
}

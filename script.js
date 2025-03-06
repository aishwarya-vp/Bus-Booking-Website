document.addEventListener("DOMContentLoaded", function () {
    let users = JSON.parse(localStorage.getItem("users")) || [];

    function signUp() {
        let email = document.getElementById("signup-email").value;
        let password = document.getElementById("signup-password").value;
        let message = document.getElementById("signup-message");

        if (users.some(user => user.email === email)) {
            message.textContent = "Account already exists!";
            message.style.color = "red";
        } else {
            users.push({ email, password });
            localStorage.setItem("users", JSON.stringify(users));
            message.textContent = "Signup successful! Redirecting to login...";
            message.style.color = "green";

            setTimeout(() => {
                showLogin();
            }, 1500);
        }
    }

    function login() {
        let email = document.getElementById("login-email").value;
        let password = document.getElementById("login-password").value;
        let message = document.getElementById("login-message");

        let user = users.find(user => user.email === email && user.password === password);

        if (user) {
            message.textContent = "Login successful!";
            message.style.color = "green";

            setTimeout(() => {
                window.location.href = "dashboard.html"; // Redirect to another page
            }, 1500);
        } else {
            message.textContent = "Invalid email or password.";
            message.style.color = "red";
        }
    }

    function showForgotPassword() {
        document.getElementById("login-section").classList.add("hidden");
        document.getElementById("forgot-password-section").classList.remove("hidden");
    }

    function showLogin() {
        document.getElementById("signup-section").classList.add("hidden");
        document.getElementById("forgot-password-section").classList.add("hidden");
        document.getElementById("login-section").classList.remove("hidden");
    }

    function showSignUp() {
        document.getElementById("login-section").classList.add("hidden");
        document.getElementById("signup-section").classList.remove("hidden");
    }

    function resetPassword() {
        let email = document.getElementById("reset-email").value;
        let newPassword = document.getElementById("new-password").value;
        let message = document.getElementById("reset-message");

        let userIndex = users.findIndex(user => user.email === email);

        if (userIndex !== -1) {
            users[userIndex].password = newPassword;
            localStorage.setItem("users", JSON.stringify(users));
            message.textContent = "Password reset successful! Redirecting to login...";
            message.style.color = "green";

            setTimeout(() => {
                showLogin();
            }, 1500);
        } else {
            message.textContent = "Email not found!";
            message.style.color = "red";
        }
    }

    // Expose functions globally
    window.signUp = signUp;
    window.login = login;
    window.showForgotPassword = showForgotPassword;
    window.showLogin = showLogin;
    window.showSignUp = showSignUp;
    window.resetPassword = resetPassword;
});

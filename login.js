document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const emailError = document.getElementById('email-error');
    const passwordError = document.getElementById('password-error');
    const togglePassword = document.getElementById('toggle-password');

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        let valid = true;

        if (emailInput.value.trim() === '') {
            emailError.textContent = 'Email or User ID is required';
            valid = false;
        } else {
            emailError.textContent = '';
        }

        if (passwordInput.value.trim() === '') {
            passwordError.textContent = 'Password is required';
            valid = false;
        } else {
            passwordError.textContent = '';
        }

        if (valid) {
            window.location.href = 'index.html';
        }
    });

    togglePassword.addEventListener('click', () => {
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);
        togglePassword.classList.toggle('fa-eye');
        togglePassword.classList.toggle('fa-eye-slash');
    });
});

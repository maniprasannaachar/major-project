function validateForm() {
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    let valid = true;

    // Clear previous error messages
    document.getElementById('nameError').innerText = '';
    document.getElementById('emailError').innerText = '';
    document.getElementById('phoneError').innerText = '';
    document.getElementById('passwordError').innerText = '';
    document.getElementById('confirmPasswordError').innerText = '';

    // Name Validation
    if (fullName.length < 5) {
        document.getElementById('nameError').innerText = 'Name must be at least 5 characters';
        valid = false;
    }

    // Email Validation
    if (!email.includes('@')) {
        document.getElementById('emailError').innerText = 'Enter a valid email';
        valid = false;
    }

    // Phone Number Validation
    const phoneRegex = /^\d{10}$/;
    if (phone === '123456789' || !phoneRegex.test(phone)) {
        document.getElementById('phoneError').innerText = 'Enter a valid 10-digit phone number';
        valid = false;
    }

    // Password Validation
    if (password.toLowerCase() === 'password' || password.length < 8 || password.toLowerCase() === fullName.toLowerCase()) {
        document.getElementById('passwordError').innerText = 'Password must be at least 8 characters and cannot be "password" or your name';
        valid = false;
    }

    // Confirm Password Validation
    if (password !== confirmPassword) {
        document.getElementById('confirmPasswordError').innerText = 'Passwords do not match';
        valid = false;
    }

    // Check if form is valid
    if (valid) {
        alert('Form submitted successfully!');
    }
}

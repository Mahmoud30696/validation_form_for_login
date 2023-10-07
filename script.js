function validateForm() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');

    
    if (username === 'your_username' && password === 'your_password') {
        errorMessage.innerText = 'username not exsit';
        return true; 
    } else {
        errorMessage.innerText = 'Invalid username or password.';
        return false; 
    }
}

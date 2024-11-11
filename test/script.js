document.getElementById('login').addEventListener('click', function(event) {
   
 const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    if (username === 'admin' && password === 'admin') {
        alert('Login successful');
    } else {
        alert('Invalid username or password');
    }
});


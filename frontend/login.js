document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');

    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            const userData = localStorage.getItem(email);
            if (!userData) {
                alert("Este usuario no está registrado.");
                return;
            }

            const user = JSON.parse(userData);
            if (user.password === password) {
                alert("Inicio de sesión exitoso.");
                localStorage.setItem('currentUser', email);
                window.location.href = 'appointments.html';
            } else {
                alert("Contraseña incorrecta.");
            }
        });
    }
});


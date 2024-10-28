document.addEventListener('DOMContentLoaded', function() {
    const registerForm = document.getElementById('registerForm');
    if (registerForm) {
        registerForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            const nombre = document.getElementById('nombre').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            // Validar si el usuario ya existe
            if (localStorage.getItem(email)) {
                alert("Este correo ya está registrado.");
                return;
            }

            // Guardar el nuevo usuario
            const userData = { nombre, email, password };
            localStorage.setItem(email, JSON.stringify(userData));

            alert("Registro exitoso. Ahora puedes iniciar sesión.");
            window.location.href = 'login.html'; 
        });
    }
});

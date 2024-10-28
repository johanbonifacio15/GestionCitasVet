document.addEventListener('DOMContentLoaded', function() {
    const registerLink = document.getElementById('registerLink');
    const loginLink = document.getElementById('loginLink');
    const userContainer = document.getElementById('userContainer');
    const userName = document.getElementById('userName');
    const logoutButton = document.getElementById('logout');

    const currentUser = localStorage.getItem('currentUser');
    if (currentUser) {
        const userData = JSON.parse(localStorage.getItem(currentUser));
        updateNavForLoggedInUser(userData.nombre);
    }

    function updateNavForLoggedInUser(userNameText) {
        if (registerLink) registerLink.style.display = 'none';
        if (loginLink) loginLink.style.display = 'none';

        if (userContainer) {
            userContainer.style.display = 'inline-block';
            userName.textContent = userNameText;
        }
    }

    if (logoutButton) {
        logoutButton.addEventListener('click', function(event) {
            event.preventDefault();
            localStorage.removeItem('currentUser');
            alert("Has cerrado sesión.");
            window.location.href = 'login.html';
        });
    }
});

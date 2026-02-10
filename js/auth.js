const loginForm = document.getElementById('loginForm');


if (loginForm) {
loginForm.addEventListener('submit', (e) => {
e.preventDefault();


const username = document.getElementById('username');
const password = document.getElementById('password');
const userError = document.getElementById('userError');
const passError = document.getElementById('passError');


userError.textContent = '';
passError.textContent = '';


let valid = true;


if (!username.value.trim()) {
userError.textContent = 'Username required';
valid = false;
}


if (!password.value.trim()) {
passError.textContent = 'Password required';
valid = false;
}


if (valid) {
localStorage.setItem('loggedIn', 'true');
window.location.href = 'dashboard.html';
}
});
}
const showAlert = (message) => {
const alert = document.createElement('div');
alert.className = 'alert';
alert.textContent = message;


document.body.appendChild(alert);


setTimeout(() => {
alert.remove();
}, 3000);
};
const navItems = document.querySelectorAll('.nav-item');


navItems.forEach(item => {
if (item.href === window.location.href) {
item.classList.add('active');
}
});
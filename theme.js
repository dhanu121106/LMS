const themeToggle = document.getElementById('themeToggle');


const applyTheme = (theme) => {
document.body.classList.toggle('dark', theme === 'dark');
};


const savedTheme = localStorage.getItem('theme') || 'light';
applyTheme(savedTheme);


if (themeToggle) {
themeToggle.addEventListener('click', () => {
const newTheme = document.body.classList.contains('dark') ? 'light' : 'dark';
localStorage.setItem('theme', newTheme);
applyTheme(newTheme);
});
}
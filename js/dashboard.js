const sidebar = document.getElementById('sidebar');
const menuToggle = document.getElementById('menuToggle');


if (menuToggle) {
menuToggle.addEventListener('click', () => {
sidebar.classList.toggle('open');
});
}


const stats = [
{ title: 'Total Courses', value: 6 },
{ title: 'Assignments Due', value: 3 },
{ title: 'Attendance', value: '92%' },
{ title: 'GPA', value: 8.7 }
];


const cardsContainer = document.getElementById('dashboardCards');


if (cardsContainer) {
stats.forEach(stat => {
const card = document.createElement('div');
card.className = 'card';
card.innerHTML = `
<h3>${stat.title}</h3>
<p>${stat.value}</p>
`;
cardsContainer.appendChild(card);
});
}

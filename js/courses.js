const courses = [
{ name: 'DBMS', status: 'Active' },
{ name: 'Operating Systems', status: 'Completed' },
{ name: 'AI Fundamentals', status: 'Active' }
];


const courseContainer = document.getElementById('courseList');


if (courseContainer) {
courses.forEach(course => {
const card = document.createElement('div');
card.className = 'course-card';


const statusClass = course.status === 'Active' ? 'active' : 'completed';


card.innerHTML = `
<h3>${course.name}</h3>
<span class="status ${statusClass}">${course.status}</span>
`;


courseContainer.appendChild(card);
});
}
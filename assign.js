const assignments = [
{ title: 'DBMS Assignment', due: '2026-02-15', status: 'Pending' },
{ title: 'AI Report', due: '2026-02-05', status: 'Pending' }
];


const assignmentContainer = document.getElementById('assignmentList');


const getStatus = (assignment) => {
const today = new Date();
const dueDate = new Date(assignment.due);


if (assignment.status === 'Submitted') return 'Submitted';
if (today > dueDate) return 'Late';
return 'Pending';
};


if (assignmentContainer) {
assignments.forEach((a, index) => {
const status = getStatus(a);


const card = document.createElement('div');
card.className = `assignment ${status.toLowerCase()}`;


card.innerHTML = `
<h3>${a.title}</h3>
<p>Due: ${a.due}</p>
<p>Status: <span id="status-${index}">${status}</span></p>
<button id="submit-${index}">Submit Assignment</button>
`;

assignmentContainer.appendChild(card);


const btn = card.querySelector('button');
btn.addEventListener('click', () => {
a.status = 'Submitted';
document.getElementById(`status-${index}`).textContent = 'Submitted';
btn.disabled = true;
showAlert('Assignment Submitted');
});
});
}
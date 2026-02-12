const editBtn = document.getElementById('editProfile');
const profileForm = document.getElementById('profileForm');


if (editBtn) {
editBtn.addEventListener('click', () => {
const inputs = profileForm.querySelectorAll('input');


if (editBtn.textContent === 'Edit Profile') {
inputs.forEach(i => i.disabled = false);
editBtn.textContent = 'Save';
} else {
inputs.forEach(i => i.disabled = true);
editBtn.textContent = 'Edit Profile';
showAlert('Profile Updated');
}
});
}
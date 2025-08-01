const form = document.getElementById('internForm');
const list = document.getElementById('internList');

let interns = JSON.parse(localStorage.getItem('interns')) || [];

function displayInterns() {
  list.innerHTML = '';
  interns.forEach((intern, index) => {
    const div = document.createElement('div');
    div.className = 'intern';
    div.innerHTML = `
      <div class="intern-info">
        <strong>${intern.name}</strong> - ${intern.email} - ${intern.department} - ${intern.joinDate}
      </div>
      <button class="delete-btn" onclick="deleteIntern(${index})">Delete</button>
    `;
    list.appendChild(div);
  });
}

function deleteIntern(index) {
  interns.splice(index, 1);
  localStorage.setItem('interns', JSON.stringify(interns));
  displayInterns();
}

form.addEventListener('submit', function(e) {
  e.preventDefault();
  const newIntern = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    department: document.getElementById('department').value,
    joinDate: document.getElementById('joinDate').value,
  };
  interns.push(newIntern);
  localStorage.setItem('interns', JSON.stringify(interns));
  form.reset();
  displayInterns();
});

displayInterns();
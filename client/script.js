const form = document.getElementById('task-form');
const input = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const taskText = input.value.trim();
  if (taskText !== '') {
    addTask(taskText);
    input.value = '';
  }
});

function addTask(text) {
  const li = document.createElement('li');
  li.textContent = text;
  const done = document.createElement('button');
  done.textContent = '✔️';
  done.onclick = () => li.remove();
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = '❌';
  deleteBtn.onclick = () => li.remove();

  li.appendChild(deleteBtn);
  taskList.appendChild(li);

  li.appendChild(done);
  taskList.appendChild(li);
}

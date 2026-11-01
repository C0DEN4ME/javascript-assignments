// array for todo list
const todoList = [
  {
    id: 1,
    task: 'Learn HTML',
    completed: true,
  },
  {
    id: 2,
    task: 'Learn CSS',
    completed: true,
  },
  {
    id: 3,
    task: 'Learn JS',
    completed: false,
  },
  {
    id: 4,
    task: 'Learn TypeScript',
    completed: false,
  },
  {
    id: 5,
    task: 'Learn React',
    completed: false,
  },
];

// add your code here


const list = document.querySelector('ul');
const dialog = document.querySelector('dialog');
const form = dialog.querySelector('form');
const taskInput = form.querySelector('input');
const addButton = document.querySelector('.add-btn');
let nextId = 6;

function addTodoToPage(todo) {
  const li = document.createElement('li');
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.id = `todo-${todo.id}`;
  checkbox.checked = todo.completed;
  const label = document.createElement('label');
  label.htmlFor = checkbox.id;
  label.textContent = todo.task;
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';

  checkbox.addEventListener('change', function () {
    todo.completed = checkbox.checked;
    console.log(todoList);
  });
  deleteButton.addEventListener('click', function () {
    const index = todoList.findIndex(function (item) {
      return item.id === todo.id;
    });
    todoList.splice(index, 1);
    list.removeChild(li);
    console.log(todoList);
  });
  li.appendChild(checkbox);
  li.appendChild(label);
  li.appendChild(deleteButton);
  list.appendChild(li);
}

for (const todo of todoList) {
  addTodoToPage(todo);
}
addButton.addEventListener('click', function () {
  dialog.showModal();
});
form.addEventListener('submit', function (event) {
  event.preventDefault();
  const task = taskInput.value.trim();
  if (task === '') return;
  const todo = {id: nextId, task: task, completed: false};
  nextId++;
  todoList.push(todo);
  addTodoToPage(todo);
  console.log(todoList);
  form.reset();
  dialog.close();
});
const cancelButton = document.querySelector('.cancel-btn');
cancelButton.addEventListener('click', function () {
  dialog.close();
});

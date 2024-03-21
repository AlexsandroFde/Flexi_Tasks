function createTaskElement(taskContent) {
    const li = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    const span = document.createElement('span');
    span.textContent = taskContent;
    span.classList.add('task-content');
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Excluir';
    deleteButton.classList.add('delete');
    deleteButton.addEventListener('click', function() {
        li.remove();
        updateTaskCount();
    });
    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteButton);
    taskList.appendChild(li);
    updateTaskCount();
}

function updateTaskCount() {
  const taskCount = document.querySelectorAll('#taskList li').length;
  document.getElementById('taskCount').textContent = taskCount;
}

function addTask() {
  const taskContent = taskInput.value.trim();
  if (taskContent !== '') {
    createTaskElement(taskContent);
    taskInput.value = '';
  }
}

function showAllTasks() {
  const tasks = document.querySelectorAll('#taskList li');
  tasks.forEach(task => {
    task.style.display = 'flex';
  });
}

function showPendingTasks() {
  const tasks = document.querySelectorAll('#taskList li');
  tasks.forEach(task => {
    if (!task.classList.contains('completed')) {
      task.style.display = 'flex';
    } else {
      task.style.display = 'none';
    }
  });
}

function showCompletedTasks() {
  const tasks = document.querySelectorAll('#taskList li');
  tasks.forEach(task => {
    if (task.classList.contains('completed')) {
      task.style.display = 'flex';
    } else {
      task.style.display = 'none';
    }
  });
}

function clearAllTasks() {
  taskList.innerHTML = '';
  updateTaskCount();
}

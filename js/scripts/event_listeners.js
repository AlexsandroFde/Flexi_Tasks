addTaskButton.addEventListener('click', function() {
    addTask();
});
  
taskInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});

taskList.addEventListener('change', function(event) {
    const checkbox = event.target;
    const li = checkbox.parentNode;
    if (checkbox.checked) {
        li.classList.add('completed');
    } else {
        li.classList.remove('completed');
    }
});

allTasksButton.addEventListener('click', function() {
    showAllTasks();
    allTasksButton.classList.add('selected');
    pendingTasksButton.classList.remove('selected');
    completedTasksButton.classList.remove('selected');
});

pendingTasksButton.addEventListener('click', function() {
    showPendingTasks();
    allTasksButton.classList.remove('selected');
    pendingTasksButton.classList.add('selected');
    completedTasksButton.classList.remove('selected');
});

completedTasksButton.addEventListener('click', function() {
    showCompletedTasks();
    allTasksButton.classList.remove('selected');
    pendingTasksButton.classList.remove('selected');
    completedTasksButton.classList.add('selected');
});

clearAllButton.addEventListener('click', function() {
    clearAllTasks();
});
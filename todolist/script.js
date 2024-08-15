function addTask() {
    const taskInput = document.getElementById('taskInput');
    const deadlineInput = document.getElementById('deadlineInput');
    const taskList = document.getElementById('taskList');

    if (taskInput.value.trim() === '') {
        alert('Please enter a task.');
        return;
    }

    const li = document.createElement('li');
    const taskText = document.createElement('span');
    taskText.textContent = taskInput.value;

    const deadlineText = document.createElement('span');
    deadlineText.className = 'deadline';
    deadlineText.textContent = deadlineInput.value ? ` (Due: ${deadlineInput.value})` : '';

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.className = 'delete-btn';
    deleteBtn.onclick = function() {
        taskList.removeChild(li);
    };

    li.appendChild(taskText);
    li.appendChild(deadlineText);
    li.appendChild(deleteBtn);
    li.onclick = function(event) {
        if (event.target !== deleteBtn) {
            li.classList.toggle('completed');
        }
    };

    taskList.appendChild(li);
    taskInput.value = '';
    deadlineInput.value = '';
}
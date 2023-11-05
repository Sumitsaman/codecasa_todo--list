const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('tasks');

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        const taskItem = document.createElement('li');
        taskItem.innerHTML = `
            <span>${taskText}</span>
            <button onclick="toggleTask(this)">Complete</button>
            <button onclick="deleteTask(this)">Delete</button>
        `;
        taskList.appendChild(taskItem);
        taskInput.value = '';
    }
}

function toggleTask(button) {
    button.parentElement.classList.toggle('completed');
    button.textContent = button.parentElement.classList.contains('completed') ? 'Undo' : 'Complete';
}

function deleteTask(button) {
    taskList.removeChild(button.parentElement);
}

function filterTasks(status) {
    const tasks = taskList.getElementsByTagName('li');
    for (const task of tasks) {
        if (status === 'all' || (status === 'active' && !task.classList.contains('completed')) || (status === 'completed' && task.classList.contains('completed'))) {
            task.style.display = 'block';
        } else {
            task.style.display = 'none';
        }
    }
}

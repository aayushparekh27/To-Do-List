document.getElementById('add-task-btn').addEventListener('click', function() {
    const taskInput = document.getElementById('task-input');
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        addTask(taskText);
        taskInput.value = ""; // Clear input after adding task
    }
});

function addTask(taskText) {
    const taskList = document.getElementById('task-list');
    const li = document.createElement('li');

    li.innerHTML = `
        <span>${taskText}</span>
        <button class="delete-btn">×</button>
    `;

    li.querySelector('.delete-btn').addEventListener('click', function() {
        taskList.removeChild(li);
        updateTaskCount();
    });

    li.addEventListener('click', function() {
        li.classList.toggle('completed');
        updateTaskCount();
    });

    taskList.appendChild(li);
    updateTaskCount();
}

function updateTaskCount() {
    const remainingTasks = document.querySelectorAll('li:not(.completed)').length;
    document.getElementById('task-count').textContent = remainingTasks;
}

// Theme Toggle
document.getElementById('theme-toggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        this.textContent = '☀️'; // Change to sun when dark mode is active
    } else {
        this.textContent = '🌙'; // Change to moon when dark mode is inactive
    }
});

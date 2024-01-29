document.addEventListener('DOMContentLoaded', function () {
    const taskInput = document.getElementById('taskInput');
    const addButton = document.getElementById('add-btn');
    const taskList = document.getElementById('task-list');

    addButton.addEventListener('click', function () {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            const listItem = document.createElement('li');
            listItem.textContent = "Task Scheduled: " + taskText;
            taskList.appendChild(listItem);
            taskInput.value = '';
            listItem.addEventListener('click', function () {
                taskList.removeChild(listItem);
            });
        } else {
            alert('Please enter a task!');
        }
    });
});

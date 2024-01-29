document.addEventListener('DOMContentLoaded', function () {
    const taskInput = document.getElementById('taskInput');
    const addButton = document.getElementById('add-btn');
    const deleteButton = document.getElementById('delete-btn');
    const taskList = document.getElementById('task-list');
    addButton.addEventListener('click', function () {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            const listItem = document.createElement('li');
            listItem.innerHTML = '<i class="ri-delete-bin-7-line delete-icon"></i>' + taskText;
            taskList.appendChild(listItem);
            taskInput.value = '';
            const deleteIcon = listItem.querySelector('.delete-icon');
            deleteIcon.addEventListener('click', function () {
                taskList.removeChild(listItem);
            });
        } else {
            alert('Please enter a task!');
        }
    });

    deleteButton.addEventListener('click', function () {
        const taskItems = taskList.querySelectorAll('li');
        taskItems.forEach(function (taskItem) {
            taskList.removeChild(taskItem);
        });
    });
});
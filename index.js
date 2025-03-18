const taskInput = document.getElementById('task');
        const buttonAdd = document.getElementById('buttonAdd');
        const taskList = document.getElementById('taskList');
        function createTask() {
                const taskTextValue = taskInput.value.trim();
                const taskItem = document.createElement('li');
                taskItem.textContent = taskTextValue;
                taskList.append(taskItem);
                taskInput.value = '';
        }

        function checkTask(event) {
                if (event.target.tagName === 'LI') {
                event.target.classList.toggle('completed');
                }
        }
        buttonAdd.addEventListener('click', createTask);
        taskList.addEventListener('click', checkTask);
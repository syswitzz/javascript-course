const tasks = [];

function addTask(){
    let taskInput = document.querySelector(".js-task-input");
    let dateInput = document.querySelector(".js-date-input");
    
    tasks.push({task: taskInput.value, dueDate: dateInput.value});
    taskInput.value = "";
    renderTasks();
}

function renderTasks(){
    let todoListHTML = ``;

    tasks.forEach(function(taskObject, index) {
        let {task, dueDate} = taskObject;   // destructuring
        todoListHTML += `
            <div>${task}</div>
            <div>${dueDate}</div>
            <button class="js-delete-button delete-button">
                Delete
            </button>
        `;
    })

    document.querySelector(".js-task-list").innerHTML = todoListHTML;

    document.querySelectorAll(".js-delete-button")
        .forEach((deleteButton, index) => {
        deleteButton.addEventListener('click', () => {
            tasks.splice(index, 1);
            renderTasks();
        });
    });
}

document.querySelector(".js-add-button").addEventListener('click', () => {
    addTask();
})

document.querySelector(".js-task-input").addEventListener('keydown', (event) => {
    if (event.key == 'Enter') {
        addTask();
    };
})


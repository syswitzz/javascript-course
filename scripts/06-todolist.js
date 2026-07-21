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
    for(let i=0; i<tasks.length; i++) {
        let {task, dueDate} = tasks[i];     // destructuring
        todoListHTML += `
        <div>${task}</div>
        <div>${dueDate}</div>
        <button class="delete-button" onclick="
            tasks.splice(${i}, 1); renderTasks();"
        >
            Delete
        </button>
        `;
    }
    document.querySelector(".js-task-list").innerHTML = todoListHTML;
}
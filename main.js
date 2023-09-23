function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    const taskList = document.getElementById("taskList");
    const newTask = document.createElement("li");

    newTask.innerHTML = `
        <span>${taskText}</span>
        <button onclick="completeTask(this)">Complete</button>
        <button onclick="removeTask(this)">Delete</button>
    `;

    taskList.appendChild(newTask);
    taskInput.value = "";
}
function completeTask(button) {
    const taskItem = button.parentElement;
    taskItem.classList.toggle("completed");
}
function removeTask(button) {
    const taskItem = button.parentElement;
    taskItem.remove();
}

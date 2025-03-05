// Get elements from the HTML
var inputBox = document.getElementById("taskInput");
var addButton = document.getElementById("addTaskBtn");
var list = document.getElementById("taskList");
// Store tasks in an array
var tasks = [];
// Function to add a new task
function addTask() {
    var taskText = inputBox.value.trim();
    if (taskText === "")
        return; // Don't add empty tasks
    tasks.push({ text: taskText, done: false }); // Add task
    inputBox.value = ""; // Clear input field
    showTasks(); // Update the task list
}
// Function to mark a task as done or undo
function toggleTask(index) {
    tasks[index].done = !tasks[index].done;
    showTasks();
}
// Function to display tasks
function showTasks() {
    list.innerHTML = ""; // Clear the list
    tasks.forEach(function (task, index) {
        var li = document.createElement("li");
        li.textContent = task.text;
        if (task.done)
            li.classList.add("completed"); // Add strike-through if done
        li.addEventListener("click", function () { return toggleTask(index); }); // Toggle task on click
        list.appendChild(li);
    });
}
// Add task when clicking the button
addButton.addEventListener("click", addTask);

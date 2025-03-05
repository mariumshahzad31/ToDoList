// Get elements from the HTML
const inputBox = document.getElementById("taskInput") as HTMLInputElement;
const addButton = document.getElementById("addTaskBtn") as HTMLButtonElement;
const list = document.getElementById("taskList") as HTMLUListElement;

// Task structure
interface Task {
    text: string;
    done: boolean;
}

// Store tasks in an array
const tasks: Task[] = [];

// Function to add a new task
function addTask(): void {
    const taskText = inputBox.value.trim();
    if (taskText === "") return; // Don't add empty tasks

    tasks.push({ text: taskText, done: false }); // Add task
    inputBox.value = ""; // Clear input field
    showTasks(); // Update the task list
}

// Function to mark a task as done or undo
function toggleTask(index: number): void {
    tasks[index].done = !tasks[index].done;
    showTasks();
}

// Function to display tasks
function showTasks(): void {
    list.innerHTML = ""; // Clear the list
    tasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.textContent = task.text;
        if (task.done) li.classList.add("completed"); // Add strike-through if done

        li.addEventListener("click", () => toggleTask(index)); // Toggle task on click

        list.appendChild(li);
    });
}

// Add task when clicking the button
addButton.addEventListener("click", addTask);

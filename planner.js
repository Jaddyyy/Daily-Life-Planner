// Select DOM elements
const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');
const taskList = document.getElementById('taskList');

// Function to add a new task
function addTask() {
  const taskText = taskInput.value;

  // Validate input (task cannot be empty)
  if (taskText.trim() === '') {
    alert('Please enter a task!');
    return;
  }

  // Create a new task item
  const taskItem = document.createElement('li');
  taskItem.textContent = taskText;

  // Create a delete button for each task
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.addEventListener('click', deleteTask);

  // Mark task as completed when clicked
  taskItem.addEventListener('click', function() {
    taskItem.classList.toggle('completed');
  });

  // Add the delete button to the task item
  taskItem.appendChild(deleteButton);

  // Add the task to the task list
  taskList.appendChild(taskItem);

  // Clear the input field after adding the task
  taskInput.value = '';
}

// Function to delete a task
function deleteTask(event) {
  const taskItem = event.target.parentElement;
  taskList.removeChild(taskItem);
}

// Add event listener for the add task button
addTaskButton.addEventListener('click', addTask);

// Optional: Enable "Enter" key to add a task
taskInput.addEventListener('keypress', function(event) {
  if (event.key === 'Enter') {
    addTask();
  }
});

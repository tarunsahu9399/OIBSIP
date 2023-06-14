
var tasks = [];

function addTask() {
  var taskInput = document.getElementById("taskInput");
  var task = taskInput.value.trim();

  if (task !== "") {
    var newTask = {
      name: task,
      completed: false
    };

    tasks.push(newTask);
    taskInput.value = "";

    displayTasks();
  }
}

function displayTasks() {
  var pendingList = document.getElementById("pendingList");
  var completedList = document.getElementById("completedList");
  pendingList.innerHTML = "";
  completedList.innerHTML = "";

  tasks.forEach(function(task, index) {
    var listItem = document.createElement("li");

    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = task.completed;
    checkbox.onchange = function() {
      toggleComplete(index);
    };
    listItem.appendChild(checkbox);

    var taskName = document.createElement("span");
    taskName.innerText = task.name;
    listItem.appendChild(taskName);

    var deleteButton = document.createElement("span");
    deleteButton.innerText = "Delete";
    deleteButton.classList.add("delete");
    deleteButton.onclick = function() {
      deleteTask(index);
    };
    listItem.appendChild(deleteButton);

    var editButton = document.createElement("span");
    editButton.innerText = "Edit";
    editButton.classList.add("edit");
    editButton.onclick = function() {
      editTask(index);
    };
    listItem.appendChild(editButton);

    if (task.completed) {
      completedList.appendChild(listItem);
    } else {
      pendingList.appendChild(listItem);
    }
  });
}

function toggleComplete(index) {
  tasks[index].completed = !tasks[index].completed;
  displayTasks();
}

function deleteTask(index) {
  tasks.splice(index, 1);
  displayTasks();
}

function editTask(index) {
  var task = tasks[index].name;
  var newTask = prompt("Edit Task", task);

  if (newTask !== null) {
    tasks[index].name = newTask.trim();
    displayTasks();
  }
}

displayTasks();

// button

document.getElementById("add-button").addEventListener("click", function () {
  const deleteButton = document.createElement("button");

  deleteButton.id = "delete-button";
  const trashIcon = document.createElement("i");
  trashIcon.className = "fa-solid fa-trash";
  deleteButton.appendChild(trashIcon);

  const inputTodo = document.getElementById("input-todo").value;

  const newTask = document.createElement("li");
  newTask.innerHTML = inputTodo;

  newTask.appendChild(deleteButton);
  document.getElementById("task-list").appendChild(newTask);

  document.getElementById("input-todo").value = "";
});

// deleting

const list = document.getElementById("task-list");

list.addEventListener("click", function (event) {
  if (event.target.tagName === "BUTTON") {
    const listItem = event.target.parentNode;
    list.removeChild(listItem);
  }
});

// adding trash icon

const trashIcon = `<i class="fas fa-trash-can-slash"></i>`;
document.getElementById("my-element").innerHTML = trashIcon;

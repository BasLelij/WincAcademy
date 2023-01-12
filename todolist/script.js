// keyup input

document
  .getElementById("input-todo")
  .addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
      document.getElementById("add-button").click();
    }
  });

// add button

document.getElementById("add-button").addEventListener("click", function () {
  // delete button and list item
  const deleteButton = document.createElement("button");

  deleteButton.id = "delete-button";

  const inputTodo = document.getElementById("input-todo").value;

  const newTask = document.createElement("li");
  newTask.innerHTML = inputTodo;
  newTask.contentEditable = true;

  newTask.appendChild(deleteButton);
  document.getElementById("task-list").appendChild(newTask);

  document.getElementById("input-todo").value = "";

  const trashIcon = document.createElement("i");
  trashIcon.className = "fa-solid fa-trash";
  deleteButton.appendChild(trashIcon);

  deleteButton.contentEditable = false;

  // keyup newTask (net niet helemaal gelukt)

  // newTask.addEventListener("keyup", function (event) {
  //   if (event.key === "Enter") {
  //     event.preventDefault();
  //     newTask.contentEditable = false;
  //   }
  // });

  // Click event trash icon

  trashIcon.addEventListener("click", function (event) {
    const listItem = event.target.parentNode.parentNode;
    list.removeChild(listItem);
  });

  //create checkbox
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.className = "checkbox";

  //add click event listener on checkbox
  checkbox.addEventListener("click", function (event) {
    if (event.target.checked) {
      newTask.style.textDecoration = "line-through";
    } else {
      newTask.style.textDecoration = "none";
    }
  });

  //append checkbox into the new task element
  newTask.appendChild(checkbox);
});

// deleting

const list = document.getElementById("task-list");

list.addEventListener("click", function (event) {
  if (event.target.tagName === "BUTTON") {
    const listItem = event.target.parentNode;
    list.removeChild(listItem);
  }
});

// checkbox

document.getElementById("add-button").addEventListener("click", function () {
  //create checkbox
  const newTask = document.getElementsByTagName("li");
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.className = "checkbox";

  //add click event listener on checkbox
  checkbox.addEventListener("click", function (event) {
    if (event.target.checked) {
      newTask.style.textDecoration = "line-through";
    } else {
      newTask.style.textDecoration = "none";
    }
  });

  newTask.appendChild(checkbox);
});

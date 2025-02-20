function saveTask() {
  let input = document.getElementById("task");
  let time = document.getElementById("task-time");
  let List = document.getElementById("task-list");

  if (input.value.trim() === "") {
    alert("Plz enter task 🙏");
    return;
  }

  let li = document.createElement("li");
  let taskText = document.createElement("span");
  taskText.textContent = `${input.value} (Due:- ${time.value})`;

  let completeBtn = document.createElement("button");
  completeBtn.textContent = "Completed";
  completeBtn.onclick = function () {
    li.classList.toggle("completed");
  };

  let editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  editBtn.onclick = function () {
    let newText = prompt("Edit task:", taskText.textContent);
    if (newText) taskText.textContent = newText;
  };

  let deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.onclick = function () {
    List.removeChild(li);
  };

  li.appendChild(taskText);
  li.appendChild(completeBtn);
  li.appendChild(editBtn);
  li.appendChild(deleteBtn);
  List.appendChild(li);

  input.value = "";
  time.value = "";
}

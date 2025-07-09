document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("todoForm");
  const taskInput = document.getElementById("task");
  const taskList = document.getElementById("taskList");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const task = taskInput.value.trim();
    if (task === "") {
      alert("Please enter a task.");
      return;
    }

    const li = document.createElement("li");
    li.className = "list-group-item";
    li.textContent = task;

    taskList.appendChild(li);
    taskInput.value = "";
  });
});
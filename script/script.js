const postBtn = document.getElementsByClassName("create-task")[0];
const form = document.querySelector(".input-form");
const taskList = document.querySelector(".task-list");

taskList.innerHTML = ""

postBtn.addEventListener("click", function () {
  if (form.classList.contains("hidden")) {
    form.classList.remove("hidden");
    postBtn.textContent = "Close";
  } else {
    form.classList.add("hidden");
    postBtn.textContent = "Enter New Task";
  }
});


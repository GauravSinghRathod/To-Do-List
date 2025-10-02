let input = document.querySelector(".input");
let submitBtn = document.querySelector(".submit-btn");
let allTask = document.querySelector(".all-tasks");
let clearBtn = document.querySelector(".clear-btn");

function Addtask() {
  if (input.value !== "") {
  
    let li = document.createElement("li");

    let taskText = document.createElement("span");   // Create span for the task text
    taskText.textContent = input.value;
    taskText.classList.add("task-text");

    let buttonContainer = document.createElement("div");   // Create a div to hold the buttons
    buttonContainer.classList.add("task-buttons");

   
    let completeBtn = document.createElement("button");
    completeBtn.textContent = "✅";
    completeBtn.classList.add("btn", "btn-complete");
    completeBtn.addEventListener("click", () => {
      li.classList.toggle("extra");
    });

   
    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "🗑️";
    deleteBtn.classList.add("btn", "btn-delete");
    deleteBtn.addEventListener("click", () => {
      li.remove();
    });

   
    buttonContainer.appendChild(completeBtn);
    buttonContainer.appendChild(deleteBtn);

    // Add task text and button container to the task item
    li.appendChild(taskText);
    li.appendChild(buttonContainer);

    allTask.appendChild(li);

    input.value = "";
  }
}

submitBtn.addEventListener("click", Addtask);

input.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    Addtask();
  }
});

clearBtn.addEventListener("click", function () {
  allTask.querySelectorAll("li").forEach((li) => li.remove());
});
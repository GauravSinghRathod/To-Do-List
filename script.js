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

    // Edit button
let editBtn = document.createElement("button");
editBtn.textContent = "✏️";
editBtn.classList.add("btn", "btn-edit");

editBtn.onclick = function () {

  let editInput = document.createElement("input");
  editInput.value = taskText.textContent;
  editInput.classList.add("input");

  li.replaceChild(editInput, taskText);

  let updateBtn = document.createElement("button");
  updateBtn.textContent = "💾";
  updateBtn.classList.add("btn", "btn-update");

  updateBtn.onclick = function () {
    taskText.textContent = editInput.value;
    li.replaceChild(taskText, editInput);
    updateBtn.remove();
  };

  buttonContainer.appendChild(updateBtn);
};



   
    buttonContainer.appendChild(completeBtn);
    buttonContainer.appendChild(deleteBtn);
    buttonContainer.appendChild(editBtn); 

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
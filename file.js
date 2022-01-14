const add = document.querySelector(".btn");
const textInput = document.querySelector("input");
const todoItems = document.querySelector(".todo-items");
const list = document.querySelector("li");

add.addEventListener("click", (event) => {
  event.preventDefault();
  const inputData = textInput.value;
  const list = document.createElement("li");
  const spanList = document.createElement("span");
  const todoBtn = document.createElement("div");
  const button1 = document.createElement("button");
  const button2 = document.createElement("button");
  todoBtn.appendChild(button1);
  todoBtn.appendChild(button2);
  list.appendChild(spanList);
  list.appendChild(todoBtn);
  button1.textContent = "Done";
  button2.textContent = "Remove";
  button1.classList.add("btn2", "done");
  button2.classList.add("btn2", "remove");
  spanList.textContent = inputData;
  todoItems.append(list);
  textInput.value = "";
});

todoItems.addEventListener("click", (e) => {
  if (e.target.classList.contains("done")) {
    const doneList = e.target.parentNode.previousElementSibling;
    doneList.style.textDecoration = "line-through";
  }
  if (e.target.classList.contains("remove")) {
    const removeList = e.target.parentNode.parentNode;
    removeList.remove();
  }
});

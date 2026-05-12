const input = document.querySelector("input");
const button = document.querySelector(".TodolistContainer button");
const container = document.querySelector(".TodoitemsContainer");

function createTodoItem(value) {
  return `
    <div class="Todoitem">
      <p>${value}</p>
      <div class="tod-item-check">
        <input class="check" type="checkbox">
        <button class="todoDelete">Delete</button>
      </div>
    </div>
  `;
}

button.addEventListener("click", function () {
  let inputValue = input.value;

  if (inputValue.trim() === "") {
    alert("Enter something");
    return;
  }


  container.insertAdjacentHTML("beforeend", createTodoItem(inputValue));

  input.value = "";
      container.addEventListener("click", function (e) {

      // Delete
      if (e.target.classList.contains("todoDelete")) {
        e.target.closest(".Todoitem").remove();
      }

      // Checkbox complete
      if (e.target.classList.contains("check")) {
        e.target.closest(".Todoitem").classList.toggle("completed");
      }

    });
});

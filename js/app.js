
const usersInput = document.getElementById("input");

const subButton = document.getElementById("submit-button");

const list = document.getElementById("todo-list");

const resetButton = document.getElementById("reset");


subButton.addEventListener("click", addItems);
resetButton.addEventListener("click", resetButtonFn);
list.addEventListener("dblclick", cleanEl);
list.addEventListener("click", crossEl);

function addItems(e) {
  if (usersInput.value) {
    const newItem = document.createElement("li");
    newItem.textContent = usersInput.value;
    list.appendChild(newItem);
    usersInput.value = "";
  }
}

// I can't use a arrow function unless I put the eventlistener after it's inicialization

function resetButtonFn(e) {
  list.innerHTML = "";
  usersInput.value = "";

}
function crossEl(e){
  const parentNode = e.target.parentNode
  parentNode.style.setProperty("text-decoration", "line-through");
}

function cleanEl(e) {
  const parentNode = e.target.parentNode
  parentNode.ondblclick = () => parentNode.removeChild(e.target) // I can't have them outside of the function, for it will mess with the add to the list
  document.addEventListener("keydown", (keyboardEvent) => {
    if (keyboardEvent.key === "Control") {
      parentNode.dispatchEvent(new MouseEvent("dblclick"))
    }
  })
}
console.dir("hi")
const usersInput = document.getElementById("input");
console.dir(usersInput);
const subButton = document.getElementById("submit-button");
console.dir(subButton);
const list = document.getElementById("todo-list");
console.dir(list)
const resetButton = document.getElementById("reset")

subButton.addEventListener("click", addItems)
resetButton.addEventListener("click", resetButtonFn)
list.addEventListener("click", cleanEl)

  function addItems(e) {
  if(usersInput.value){
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

function cleanEl(e) {
  const parentNode = e.target.parentNode
  parentNode.removeChild(e.target)
}
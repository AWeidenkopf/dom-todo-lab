
const usersInput = document.getElementById("input");

const subButton = document.getElementById("submit-button");

const list = document.getElementById("todo-list");

const resetButton = document.getElementById("reset");

subButton.addEventListener("click", addItems);
resetButton.addEventListener("click", resetButtonFn)

function addItems(e) {
  if (usersInput.value) {
    const newItem = document.createElement("li");
    newItem.textContent = usersInput.value;
    list.appendChild(newItem);
    newItem.addEventListener("dblclick", cleanEl);
    newItem.addEventListener("click", crossEl);
    usersInput.value = "";
  }
}
//my event listeners for the new items need to be inside of the fn block where 
//it creates it/ otherwise I wouldn't access it
// I can't use a arrow function unless I put the eventlistener after it's initialization

function resetButtonFn(e) {
  list.innerHTML = "";
  usersInput.value = "";

}
// .split(' ').some(decor => decor === "line-through")) 
// since the text-decoration can have more than one value
// it would be interesting to try an approach where if the are more
// the cliclink wouldn't set it to none completely

function crossEl(e) {
  if (e.target.style.getPropertyValue("text-decoration")){
    e.target.style.setProperty("text-decoration", "none");  
  } else {
    e.target.style.setProperty("text-decoration", "line-through underline");
  }
}

function cleanEl(e) {
  const parentNode = e.target.parentNode
  parentNode.removeChild(e.target)
}
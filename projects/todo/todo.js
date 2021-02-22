let list = document.querySelector("#todoList");
let typeIn = document.querySelector("#input");

let addTask = () => {
    let listElement = document.createElement("li");
    let checkBox = document.createElement("input");
    let task = document.createTextNode(typeIn.value);
    let removeTask = document.createElement("button");

    let taskComplete = () => {
        listElement.style.textDecoration = "line-through";
        listElement.style.backgroundColor = "#52796f";
        removeTask.style.color = "white";
    };
    let taskNotComplete = () => {
        listElement.style.textDecoration = "none";
        listElement.style.backgroundColor = "transparent";
        removeTask.style.color = "#84A98C";
    };

    checkBox.setAttribute("type", "checkbox");
    checkBox.setAttribute("class", "chbox");
    checkBox.addEventListener("change", () => {
        checkBox.checked ? 
        taskComplete() : 
        taskNotComplete();
    });

    removeTask.setAttribute("class", "del-btn");
    removeTask.innerText = "Delete";
    removeTask.addEventListener("click", () => {
        listElement.remove();
    });

    listElement.appendChild(checkBox);
    listElement.appendChild(task);
    listElement.appendChild(removeTask);
    list.appendChild(listElement);
    typeIn.value = "";
}
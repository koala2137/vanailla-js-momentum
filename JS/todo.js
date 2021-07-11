const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDOs() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value = "";
    const newToDoObj = {
        text: newToDo,
        id: Date.now(),
    }
    toDos.push(newToDoObj);
    paintToDo(newToDoObj);
    saveToDOs();
}

function deleteToDo(event) {
    const li = event.target.parentElement;
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDOs();
    li.remove();
}

function switchToInput(event) {
    const span = event.target;
    span.classList.add(HIDDEN_CLASSNAME);
    const hiddenForm = span.nextSibling
    hiddenForm.classList.remove(HIDDEN_CLASSNAME);
}

function handleHiddenForm(event) {
    event.preventDefault();
    const hiddenForm = event.target;
    const hiddenInput = hiddenForm.children[0];
    const li = hiddenForm.parentElement;
    const span = li.firstChild;
    const refinedToDo = hiddenInput.value;
    const index = toDos.findIndex(obj => obj.text === span.innerText);
    const dateNow = Date.now();
    toDos.splice(index, 1, {text: refinedToDo, id: dateNow});
    saveToDOs();
    li.id = dateNow;
    hiddenInput.value = "";
    span.innerText = refinedToDo;
    span.classList.remove(HIDDEN_CLASSNAME);
    hiddenForm.classList.add(HIDDEN_CLASSNAME);
}

function paintToDo(newToDoObj) {
    const li = document.createElement("li");
    li.id = newToDoObj.id;
    const span = document.createElement("span");
    span.innerText = newToDoObj.text;
    span.addEventListener("click", switchToInput);
    const hiddenForm = document.createElement("form");
    const hiddenInput = document.createElement("input");
    hiddenForm.appendChild(hiddenInput);
    hiddenForm.classList.add(HIDDEN_CLASSNAME);
    hiddenForm.addEventListener("submit", handleHiddenForm);
    const button = document.createElement("button");
    button.innerText = "X";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(hiddenForm);
    li.appendChild(button);
    toDoList.appendChild(li);

    }

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDOs = localStorage.getItem(TODOS_KEY);

if(savedToDOs !== null) {
    const parsedToDos = JSON.parse(savedToDOs);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-input");
const greeting = document.querySelector("#greeting");
const toDoForm = document.querySelector("#todo-form");

const USERNAME_KEY = "username"
const HIDDEN_CLASSNAME = "hidden"

function onLoginSumbit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
    
}

function paintGreetings(username) {
    greeting.innerText = `Hello, ${username}.`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
    toDoForm.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSumbit);

} else {
    paintGreetings(savedUsername);
}

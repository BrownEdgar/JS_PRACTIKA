let myform = document.querySelector("#myform");
let list = document.querySelector("#list");
let message = document.querySelector("#message");



let todoLists = [];
getToStorage()

myform.addEventListener("submit", (e) => {
	e.preventDefault();
	addTask(message.value);
	todoLists.push(message.value);
	saveLocal()
	message.value = "";
})


function addTask(value) {

	list.innerHTML += `
		<li>${value} <button class="remove-btn"><i class="far fa-trash-alt"></i></button></li>
	`;
}

function saveLocal() {
	localStorage.setItem("todoList", JSON.stringify(todoLists));
}

function getToStorage() {
	if (localStorage.getItem("todoList") !== null) {
		todoLists = JSON.parse(localStorage.getItem("todoList"))
		todoLists.forEach(elem => addTask(elem))
	}
}

let buttons = document.querySelectorAll(".remove-btn");
list.addEventListener("click", function (e) {
	if (e.target.tagName === "I" ) {
		e.target.closest("li").remove();
	}
})
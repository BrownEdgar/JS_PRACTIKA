import Storages from "./storages.js";

const myForm = document.getElementById('myForm');
const admin = {
	LOGIN: "admin",
	PASSWORD: "admin"
}

myForm.addEventListener('submit', (e) => {
	e.preventDefault()
	const login = myForm.login.value
	const password = myForm.password.value
	if (
		login.trim() === admin.LOGIN &&
		password.trim() === admin.PASSWORD
		){
			Storages.saveToStorage("login", true)
			location.href = "admin.html"
		}
})
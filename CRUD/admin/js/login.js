import Storages from "./storages.js"

const admin = {
	LOGIN: "admin",
	PASSWORD: "admin"
}

const form = document.querySelector('#myForm')

function login(e) {
	e.preventDefault()
	const login = document.querySelector('#login').value
	const password = document.querySelector('#password').value
	if (login === admin.LOGIN && password === admin.PASSWORD){
		Storages.saveToStorage("login", true)
		location.href = "admin.html"
	}else{
		alert("invalid data try again")
	}
}


form.addEventListener("submit", login)
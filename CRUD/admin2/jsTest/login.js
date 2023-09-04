import Storage from './storages.js'

const auth = {
	username: "admin",
	password: "admin"
}
const myForm = document.querySelector('#myForm');


myForm.addEventListener('submit', (e) => {
	e.preventDefault();
	const { login, password } = e.target;
	if (
		auth.username === login.value.trim().toLowerCase() &&
		auth.password === password.value.trim().toLowerCase() 
	) {
		Storage.saveToStorage("isLogin", true);
		location.href = 'admin.html'
	}else{
		alert("invalid username or password...")
	}
})
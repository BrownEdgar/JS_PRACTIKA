import Storage from "./storages.js";

const auth = {
	username: "admin",
	password: "admin"
}

const myForm = document.querySelector('#myForm')

myForm.addEventListener('submit', (e) => {
	 e.preventDefault();
	 const {login,password} = e.target;
	 if (
		 login.value.trim() === auth.username &&
		 password.value.trim() === auth.password 
	 ) {
		 Storage.saveToStorage("login", true);
		 location.href = 'admin.html'
	 }else{
		alert("invalid username or password")
	 }
	 
})



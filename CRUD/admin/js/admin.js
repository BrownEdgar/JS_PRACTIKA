import Storages from "./storages.js";

if (!Storages.getFromStorage("login")) {
	location.href = "login.html"
}
const table = document.getElementsByTagName('table')[0]



function displayHeroes() {
	const heroes = Storages.getAllHeroes()
	const tbody = document.getElementsByTagName('tbody')[0]
	tbody.innerHTML = ""
	heroes.forEach(hero => {
		tbody.innerHTML += `
			<tr>
			<td>${hero.id || "?"}</td>
			<td>${hero.name}</td>
			<td>${hero.type}</td>
			<td>
				<img src="./images/${hero.image}" />
			</td>
			<td>
			<a href="edit.html#${hero.id}">
				<i class="fa-solid fa-pencil"></i>
			</a>
			</td>
			<td>
			<button class="delete" data-heroid="${hero.id}"> 
				<i class="fa-solid fa-trash-can"></i>
			</button>
			</td>
			</tr>
		`
	})
}

displayHeroes()

table.addEventListener('click', (e) => {
	const {tagName} = e.target.parentElement;
	if (tagName === "BUTTON") {
		const id = e.target.parentElement.dataset.heroid;
		Storages.deleteById(id)
		displayHeroes()
	}
})
import Storages from "./storages.js"
const table = document.getElementsByTagName('table')[0]

if (!Storages.getToStorage("login")) {
		location.href = "login.html"
}


function displeyHeroes() {
	let heroes = Storages.getAllHeroes() || [];
	const body = document.getElementsByTagName('tbody')[0]
	body.innerHTML = ""
	if (!heroes.length) {
		document.getElementsByTagName('table')[0].style.display = "none"
	}else{
		document.getElementsByTagName('table')[0].style.display = "inline-table"
		heroes.forEach(hero => {
			body.innerHTML += `
					<tr>
							<td>${hero.id}</td>
							<td>${hero.name}</td>
							<td>${hero.type}</td>
							<td>
									<img src='./images/${hero.image}' alt='${hero.id}-${hero.name}' />				
							</td>
							<td>
									<a 
									href="edit.html#${hero.id}"
									class="edit">
									<i class="fa-solid fa-pencil"></i>
									</a>
							</td>
							<td>
								<button class="delete" data-heroId='${hero.id}'><i class="fa-solid fa-trash-can"></i></button>
							</td>
					</tr>
			`
		});
	}

}

displeyHeroes()

table.addEventListener('click', (e) => {
	const { tagName } = e.target.parentElement

	if (tagName === "BUTTON") {
		Storages.deleteById(e.target.parentElement.dataset.heroid)
	}
	displeyHeroes()
})
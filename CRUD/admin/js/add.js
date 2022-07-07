import Storages from "./storages.js"
const form = document.querySelector('#addHeroForm')


form.addEventListener('submit', (e) => {
	e.preventDefault()
	const { heroname, herotype, heroImage } = e.target
	const id = Storages.getAllHeroes().length + 1

	const newHero = {
		id,
		name: heroname.value,
		type: herotype.value,
		image: heroImage.files[0].name
	}
	Storages.saveHero(newHero)
	location.href = "admin.html"

})
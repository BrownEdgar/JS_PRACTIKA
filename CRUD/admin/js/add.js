import Storages from "./storages.js"

const addHeroForm = document.querySelector("#addHeroForm")

addHeroForm.addEventListener('submit', (e) => {
	e.preventDefault();
	const { heroname, herotype, heroImage } = e.target;
	console.dir(heroImage);
	const hero = {
		id: Date.now(),
		name: heroname.value,
		type: herotype.value,
		image: heroImage.files[0].name
	}
	Storages.saveHero(hero)
	location.href = "admin.html"
})
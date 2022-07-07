import Storages from "./storages.js"
console.log(2222);
const form = document.querySelector('#editHeroForm')
const imageBox = document.getElementById("imageBox")
const heroImage = document.getElementById("heroImage")

let heroes = Storages.getAllHeroes()
const id = location.hash.slice(1) // id
const foo = () => {


	let f = heroes.filter(hero => hero.id === Number(id))
	const inputName = document.getElementById("heroname")


	inputName.setAttribute("placeholder", f[0].name)
	imageBox.setAttribute('src', `./images/${f[0].image}`)
}
foo()

form.addEventListener('submit', (e) => {
	e.preventDefault()
	console.log(1111);
	const { heroname, herotype, heroImage } = e.target

	const newHeroes = heroes.map(elem => {
		if (elem.id == id) {
			return {
				id: elem.id,
				name: heroname.value || elem.name,
				type: herotype.value || elem.type,
				image: heroImage.files[0]?.name ? heroImage.files[0].name : elem.image  
			}
		} else {
			return elem
		}
	})
	Storages.saveToStorage("heroes", newHeroes)

	location.href = "admin.html"
})

heroImage.addEventListener('change', (e) => {
	imageBox.setAttribute('src', `./images/${heroImage.files[0].name}`)
})
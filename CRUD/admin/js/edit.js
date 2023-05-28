import { MAIN_ARRAY_NAME } from "./constants.js"
import Storages from "./storages.js"

const id 						= location.hash.slice(1)
const editHeroForm 	= document.querySelector("#editHeroForm")
const inp 					= document.querySelector("#heroname")
const herotype 			= document.querySelector("#herotype")
const heroImage 		= document.querySelector("#imageBox")


const heroes = Storages.getAllHeroes()
const hero = heroes.find(elem => elem.id == id);
console.log(hero);

inp.value = hero.name;
herotype.value = hero.type;
heroImage.setAttribute("src", `./images/${hero.image}`)

editHeroForm.addEventListener('submit', (e) => {
	e.preventDefault();
	const { heroname, herotype, heroImage } = e.target
	const newHero = {
		id,
		name: heroname.value || hero.name,
		type: herotype.value || hero.type,
		image: heroImage?.files[0]?.name || hero.image
	}

	const arr = heroes.map(elem => {
		if(elem.id == id){
			return  newHero;
		}else{
			return elem
		}
	})
	
	Storages.saveToStorage(MAIN_ARRAY_NAME, arr);
	location.href = "admin.html"

})


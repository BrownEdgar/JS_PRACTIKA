import { MAIN_ARRAY_NAME } from "./constants.js";
import Storage from "./storages.js";

const id = location.hash.slice(1);
const editHeroForm = document.querySelector("#editHeroForm");
const heroname = document.querySelector("#heroname")
const herotype = document.querySelector("#herotype")
const heroImage = document.querySelector("#imageBox")
const fileInput = document.querySelector("#heroImage")

const heroes = Storage.getAllHeroes();
const hero = heroes.find(elem => elem.id === id);

heroname.value = hero.name;
herotype.value = hero.type;
heroImage.src = `./images/${hero.image}`;



editHeroForm.addEventListener('submit', (e) => {
	 e.preventDefault();
	const { heroname, herotype, heroImage } = e.target;
	const newHero = {
		id,
		name: heroname.value || hero.name,
		type: herotype.value || hero.type,
		image: heroImage?.files?.[0]?.name ?? hero.image,
	}

	const newList = heroes.map(hero => hero.id === id ? newHero : hero);
	Storage.saveToStorage(MAIN_ARRAY_NAME, newList);
	location.assign('admin.html')
})

fileInput.addEventListener('change', (e) => {
	heroImage.src = `./images/${fileInput?.files?.[0]?.name}`;
})
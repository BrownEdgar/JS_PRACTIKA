import Storage from './storages.js'
import { MAIN_ARRAY_NAME } from "./constants.js";

const editHeroForm = document.querySelector('#editHeroForm');
const inp = document.querySelector("#heroname")
const herotype = document.querySelector("#herotype")
const heroImage = document.querySelector("#imageBox");
const heroImageInput = document.querySelector("#heroImage");

const id = location.hash.slice(1);

const heroes = Storage.getAllHeroes();
const hero = heroes.find(elem => elem.id == id);

inp.value = hero.name;
herotype.value = hero.type;
heroImage.src = `./images/${hero.image}`;

editHeroForm.addEventListener('submit', (e) => {
	e.preventDefault();
	const { heroname, herotype, heroImage } = e.target;
	const newhero = {
		id,
		name: heroname.value || hero.name,
		type: herotype.value || hero.type,
		image: heroImage?.files[0]?.name || hero.image
	}

	const arr = heroes.map(elem => {
		return elem.id == id ? newhero : elem;
	})

	Storage.saveToStorage(MAIN_ARRAY_NAME,arr);
	location.href = 'admin.html'
})

heroImageInput.addEventListener('change', (e) => {
	heroImage.src = `./images/${e.target.files[0]?.name}`;
})
import { MAIN_ARRAY_NAME } from "./constants.js";

class Storage {
	static saveToStorage(key,value){
		const types = ["string", "number", "boolean"];
		if (types.includes(typeof value)) {
			localStorage.setItem(key, value)
		}else{
			localStorage.setItem(key, JSON.stringify(value))
		}
	}

	static getFromStorage(key) {
		return localStorage.getItem(key)
	}

	static saveHero(hero) {
		const heroes = Storage.getAllHeroes()
		heroes.push(hero);
		Storage.saveToStorage(MAIN_ARRAY_NAME, heroes)
	}
	
	static getAllHeroes() {
		return localStorage.getItem(MAIN_ARRAY_NAME) && JSON.parse(localStorage.getItem(MAIN_ARRAY_NAME)) || [];
	}
	static deleteById(id) {
		const heroes = Storage.getAllHeroes()
		const heroesDelete = heroes.filter((elem) => elem.id !== id)
		Storage.saveToStorage(MAIN_ARRAY_NAME, heroesDelete)
	}
}

export default Storage;
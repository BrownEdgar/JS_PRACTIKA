import { MAIN_ARRAY_NAME } from "./constants.js";

class Storage {
	static saveToStorage(key, value) {
		if (typeof value === "string" || typeof value === "number") {
			localStorage.setItem(key, value)
		} else {
			localStorage.setItem(key, JSON.stringify(value))
		}
	}

	static getFromStorage(key) {
		return localStorage.getItem(key)
	}

	static saveHero(newHero) {
		const heroes = Storage.getAllHeroes(); // []
		heroes.push(newHero);
		Storage.saveToStorage(MAIN_ARRAY_NAME, heroes)
	}

	static getAllHeroes() {
		return Storage.getFromStorage(MAIN_ARRAY_NAME) && JSON.parse(Storage.getFromStorage(MAIN_ARRAY_NAME)) || []
	}

	static deleteById(id) {
		const heroes = Storage.getAllHeroes();
		const result = heroes.filter(hero => hero.id != id);
		Storage.saveToStorage(MAIN_ARRAY_NAME, result)
	}
}

export default Storage;
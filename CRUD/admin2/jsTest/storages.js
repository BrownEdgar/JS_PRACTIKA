import { MAIN_ARRAY_NAME } from "./constants.js";

class Storage {

	static saveToStorage(key, value) {
		if (typeof value === "object") {
			localStorage.setItem(key, JSON.stringify(value));
		} else {
			localStorage.setItem(key, value);
		}
	}

	static getFromStorages(key) {
		return localStorage.getItem(key);
	}

	static getAllHeroes() {
		const heroes = localStorage.getItem(MAIN_ARRAY_NAME)
		return (heroes && JSON.parse(heroes)) || [];
	}

	static saveHero(hero) {
		const heroes = Storage.getAllHeroes();
		heroes.push(hero);
		Storage.saveToStorage(MAIN_ARRAY_NAME, heroes)
	}
	static deleteHeroById(id) {
		const heroes = Storage.getAllHeroes();
		const filtededArr = heroes.filter(hero => hero.id != id);
		Storage.saveToStorage(MAIN_ARRAY_NAME, filtededArr)
	}
}

export default Storage;
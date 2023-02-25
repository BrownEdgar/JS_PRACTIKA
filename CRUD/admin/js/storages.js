import { MAIN_ARRAY_NAME } from "./constants.js"



export default class Storages {
	static saveToStorage(key, value){
		if (typeof value === "string" || typeof value === "number") {
			localStorage.setItem(key, value)
		}else{
			localStorage.setItem(key, JSON.stringify(value))
		}
	}

	static getFromStorage(key) {
		return localStorage.getItem(key)
	}

	static saveHero(newHero) {
		const arr = Storages.getAllHeroes()
		arr.push(newHero)
		Storages.saveToStorage(MAIN_ARRAY_NAME, arr)
	}

	static getAllHeroes() {
		return localStorage.getItem(MAIN_ARRAY_NAME) && JSON.parse(localStorage.getItem("heroes")) || []
	}

	static deleteById(id){
		const arr = Storages.getAllHeroes();
		const newHeroes = arr.filter(hero => hero.id != id)
		Storages.saveToStorage(MAIN_ARRAY_NAME, newHeroes)
	}
}
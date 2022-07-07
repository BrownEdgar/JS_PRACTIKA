export default class Storages {

	static saveToStorage(key,value) {
		if (typeof value === 'string' || typeof value === 'number') {
			localStorage.setItem(key, value)
		}else{
			localStorage.setItem(key, JSON.stringify(value))
		}
		
	}

	static getToStorage(key) {
		return localStorage.getItem(key)
	}

	static getAllHeroes() {
		return localStorage.getItem("heroes")  && JSON.parse(localStorage.getItem("heroes")) || []
	}

	static saveHero(value) {
		const arr = Storages.getAllHeroes("heroes") || []
		arr.push(value)
		Storages.saveToStorage("heroes", arr)
	}

	static deleteById(id) {
		let arr = Storages.getAllHeroes("heroes") || []
		console.log(id);
		const newARR = arr.filter(elem => elem.id  !== Number(id))
		console.log({ newARR, id });
		Storages.saveToStorage("heroes", newARR)
	}

}
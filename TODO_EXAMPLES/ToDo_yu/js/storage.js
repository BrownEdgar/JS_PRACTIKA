class Storage {

	static save(key, value) {
		if (typeof value === "object") {
			localStorage.setItem(key, JSON.stringify(value))
		} else {
			localStorage.setItem(key, value)
		}
	}

	static removeFromStorage(key) {
		localStorage.removeItem(key)
	}

	static getFromStorage(key) {
		return localStorage.getItem(key)
	}

	static clearStorage() {
		return localStorage.clear()
	}
}

export default Storage;
import Storage from "./storage.js"

const list = document.querySelector(".list")
const form = document.querySelector("form")
const resetBtn = document.querySelector(".reset")
const dataSet = JSON.parse(Storage.getFromStorage("list")) || []


if (dataSet.length > 0) {
	dataSet.forEach(todo => addData(todo, list));
}

form.addEventListener("submit", (e) => {
	let val = form.messege.value
	e.preventDefault()
	if (dataSet.indexOf(val) === -1 && val) {
		addData(val, list)
		dataSet.push(val)
		Storage.save("list", dataSet)
	} else {
		alert("Տվյալ առաջադրանքը առկա է ցանկում կամ Դաշտը սխալ է լրացված")
	}
	form.reset()
})
resetBtn.addEventListener("click", (e) => {
	e.preventDefault()
	let allLi = list.querySelectorAll(".point")
	allLi.forEach(point => point.remove())
	Storage.removeFromStorage("list")
})
list.addEventListener("click", (e) => {
	if (e.target.tagName === "I") {
		dataSet.splice(dataSet.indexOf(e.target.closest("li").textContent.trim()), 1)
		Storage.save("list", dataSet)
		e.target.closest("li").remove()
	} else if (e.target.tagName === "LI") {
		e.target.classList.toggle("_done")
	}
})

function addData(content, where) {
	where.insertAdjacentHTML('beforeend',
		`<li class="point"> ${content} <span class="remove"><i class="fa-solid fa-trash-can"></i></span></li>`)

}

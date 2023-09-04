let containerItem = document.querySelectorAll(".container-item")
let palitra = document.getElementById("palitra")
let audioClick = document.getElementById("audio-click")
let palitraText = document.querySelector(".palitra-text")

containerItem.forEach(elem => {
		const bg = elem.dataset.color;
		elem.style.backgroundColor = bg;

		elem.addEventListener('click', (e) => {
			let color = e.currentTarget.dataset.color;
			navigator.clipboard.writeText(color);
			audioClick.play()
			palitra.style.cssText = ` background-color: ${color}; opacity: 1;`;
			palitraText.style.cssText = "opacity: 1";
			palitraText.classList.add("palitra-text_active");


			setTimeout(() => {
				palitra.style.cssText = `background-color: transparent; opacity: 0;`;
				palitraText.style.cssText = "opacity: 0";
				palitraText.classList.remove("palitra-text_active")
			},1000)
		})
})



const containerItem = document.querySelectorAll(".container-item")
const palitra = document.getElementById("palitra")
const audioClick = document.getElementById("audio-click")
const palitraText = document.querySelector(".palitra-text")
const colorBox = document.querySelector("#color-box > kbd")

containerItem.forEach(elem => {
	const color = elem.dataset.color;
	elem.style.backgroundColor = color;

	elem.addEventListener('click', (e) => {
		const currentColor = e.currentTarget.dataset.color;
		navigator.clipboard.writeText(currentColor);
		audioClick.play();
		colorBox.innerText = currentColor;
		palitra.style.cssText = `
			background-color: ${currentColor};
			opacity: 1;
		`;
		palitraText.style.cssText = 'opacity: 1';
		palitraText.classList.add('palitra-text_active');

		setTimeout(() => {
			palitra.style.cssText = `
			background-color: transparent;
			opacity: 0;
		`;
			palitraText.style.cssText = 'opacity: 0';
			palitraText.classList.remove('palitra-text_active');
			colorBox.innerText = ''
		}, 1000)
	})
})






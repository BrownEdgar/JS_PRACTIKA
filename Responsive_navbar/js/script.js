const navSlide = () => {
	
	const burger = document.querySelector(".burger");
	const nav = document.querySelector(".nav-links");
	const li = document.querySelectorAll(".nav-links li");
	burger.addEventListener('click', () => {
	
		nav.classList.toggle('nav-active')
		li.forEach((elem,index )=> {
			if (elem.style.animation) {
				elem.style.animation = '';
			}else{
				elem.style.animation = `anima 0.5s ease forwards ${index / 7 + 0.3}s`
			}
		})
		burger.classList.toggle("toggle")
	})
}
navSlide()
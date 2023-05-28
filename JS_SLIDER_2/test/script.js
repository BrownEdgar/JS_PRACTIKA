const prev = document.getElementById("btn-prev");
const next = document.getElementById("btn-next");
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");


let index = 0;
function activeDots(indx) {
	for (const dot of dots) {
		dot.classList.remove("active")
	}
	dots[indx].classList.add('active')
}

function activeSlides(indx) {
	for (const slide of slides) {
		slide.classList.remove("active")
	}
	slides[indx].classList.add('active')
}
function updateSlidesAndDots(indx) {
	activeDots(indx)
	activeSlides(indx)
}


function nextSlide() {
	if (index === slides.length - 1) {
		index = 0;
	} else {
		index++;
	}
	updateSlidesAndDots(index)
}


function prevSlide() {
	if (index === 0) {
		index = slides.length - 1;
	} else {
		index--;
	}
	updateSlidesAndDots(index)
}

dots.forEach((elem,i) => {
	elem.addEventListener('click', () => {
		index = i;
		updateSlidesAndDots(index)
	})
})

prev.addEventListener('click', prevSlide)
next.addEventListener('click', nextSlide)

setInterval(() => {
	nextSlide()
}, 5000)
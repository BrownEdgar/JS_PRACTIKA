const prev 		= document.getElementById("btn-prev"),
			next 		= document.getElementById("btn-next"),
			slides 	= document.querySelectorAll(".slide"),
			dots 		= document.querySelectorAll(".dot");


let index = 0; // նախնական / current սլայդի համարը



const activeSlide = (n) => {
	for (const slide of slides) {
		slide.classList.remove("active")
	}
	slides[n].classList.add("active")
}

const activeDots = (n) => {
	for (const dot of dots) {
		dot.classList.remove("active")
	}
	dots[n].classList.add("active")
}



const uppdateSliderAndDots = (index) => {
	activeSlide(index)
	activeDots(index)
}

// եթե հասնենք վերջին/առաջին սսայդին տեղափոխվենք վերջից => սկիզբ և հակառակը  
const nextSlide = () => {
	if (index === slides.length - 1) {
		index = 0;
		uppdateSliderAndDots(index)

	} else {
		index++;
		uppdateSliderAndDots(index)
	}
	console.log(index)
}

const prevSlide = () => {
	if (index === 0) {
		index = slides.length - 1;
		uppdateSliderAndDots(index)
	} else {
		index--;
		uppdateSliderAndDots(index)
	}
	console.log(index)
}


//նավիգացիա "dots"-ի օգնությամբ
// հետևում ենք ամեն մի "dots"-ի "click"-ին և գլխավոր ինդեքսը հավասարացնում ենք կետի ինդեքսին որպեսզի "switch" լինենք հենց այդ սլայդի վրա
dots.forEach((elem, dotIndex) => {
	elem.addEventListener("click", () => {
		index = dotIndex;
		uppdateSliderAndDots(index)
	})
})

next.addEventListener("click", nextSlide)
prev.addEventListener("click", prevSlide)


//ՍԼԱՅԴԵՐԸ ավտոմատ աշխատացնելու համար 
setInterval(() => {
	nextSlide()
}, 5000)






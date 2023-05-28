"use strict"
const slider = document.querySelector(".slider")
const sliderTrack = document.querySelector(".slider-track")
const sliderItems = document.querySelectorAll(".slider-track_item")
const next_btn = document.querySelector("#next")
const prev_btn = document.querySelector("#prev")


const slidesToShow = 4
const slidesToScroll = 2
const itemsCount = sliderTrack.children.length; //7
const itemsWidth = ((sliderTrack.scrollWidth / slidesToShow)).toFixed(0) 
const movePosition = slidesToScroll * itemsWidth;

let position = 0

sliderItems.forEach(item => {
	item.style.cssText = `width: ${itemsWidth}px;`
})
next_btn.addEventListener('click', (e) => {
	console.log(position)
	const mnacord = itemsCount - (Math.abs(position) + slidesToShow * itemsWidth) / itemsWidth;
	position -= mnacord >= slidesToScroll ? movePosition : mnacord * itemsWidth;
	setPosition()
})

prev_btn.addEventListener('click', (e) => {
	console.log(position)
	const mnacord = itemsCount - (Math.abs(position) + slidesToShow * itemsWidth) / itemsWidth;
	position += mnacord >= slidesToScroll ? movePosition : mnacord * itemsWidth;
	setPosition()
})



function setPosition() {
	sliderTrack.style.transform = `translateX(${position}px)`
}
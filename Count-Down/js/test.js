const year 			= document.querySelector('#year')
const days 			= document.querySelector('#days')
const hours 		= document.querySelector('#hours')
const minutes 	= document.querySelector('#minutes')
const secunds 	= document.querySelector('#secunds')
const countdown = document.querySelector('#countdown')
const ripple 		= document.querySelector('.lds-ripple')

const currentYear = new Date().getFullYear();
const nextYear = new Date(`January 01 ${currentYear + 1} 00:00:00`)

year.textContent = currentYear + 1;

function updateCountDown() {
	const currentTime = new Date();
	const diff = nextYear - currentTime;
	
	const daysLeft = Math.floor(diff / 1000 / 60 / 60 / 24);
	const hoursLeft = Math.floor(diff / 1000 / 60 / 60) % 24;
	const minutesLeft = Math.floor(diff / 1000 / 60 ) % 60;
	const secundesLeft = Math.floor(diff / 1000 ) % 60;

	days.textContent = daysLeft;
	hours.textContent = hoursLeft < 10 ? "0" + hoursLeft : hoursLeft;
	minutes.textContent = minutesLeft < 10 ? "0" + minutesLeft : minutesLeft
	secunds.textContent = secundesLeft < 10 ? "0" + secundesLeft : secundesLeft
 
}
updateCountDown() 
setInterval(updateCountDown, 1000)

setTimeout(() => { 
	countdown.classList.add("show");
	ripple.remove()
}, 1500)
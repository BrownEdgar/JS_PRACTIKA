// const year = document.querySelector('#year')
// const days = document.querySelector('#days')
// const hours = document.querySelector('#hours')
// const minutes = document.querySelector('#minutes')
// const seconds = document.querySelector('#seconds')
// const countdown = document.querySelector('#countdown')
// const ripple = document.querySelector('.lds-ripple')


let sum = 1n;
for (let i = 2n; i <= 64n; i++) {
	sum *= i
}
 console.log(sum)
const inp = document.querySelector("#password");


function checkValue(e) {
	let upper = document.getElementsByClassName('uppercase')[0];
	let isNumber = document.getElementsByClassName('number')[0];
	let isLen = document.getElementsByClassName('length')[0];
	let value = e.target.value;
	let regEx = value.match(/[A-Z]/g);
	let regExNumber = value.match(/\d/g);
	let isValidLength = 10;
	
	regEx ? upper.classList.add("done") : upper.classList.remove("done");
	regExNumber ? isNumber.classList.add("done") : isNumber.classList.remove("done");
	value.length >= isValidLength ? isLen.classList.add("done") : isLen.classList.remove("done");
}
inp.addEventListener("input",checkValue,false);



let tabHeaders = document.querySelectorAll(".tabs .tab-header > div")
let tabcontents = document.querySelectorAll(".tabs .tab-content > div")

for (let i = 0; i < tabHeaders.length; i++ ) {
	tabHeaders[i].addEventListener('click',function (e) {
		document.querySelector(".tabs .tab-header > .active").classList.remove("active");
		tabHeaders[i].classList.add("active");

		document.querySelector(".tabs .tab-content > .active").classList.remove("active");
		tabcontents[i].classList.add("active");
		
	})
}

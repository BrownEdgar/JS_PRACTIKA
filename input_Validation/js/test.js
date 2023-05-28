const passInput = document.querySelector('#password');
const upper = document.getElementsByClassName("uppercase")[0]
const number = document.getElementsByClassName("number")[0]
const len = document.getElementsByClassName("length")[0]


function handleChange(e) {
	const upperRgxp = new RegExp(/^[A-Z]/);
	const numberRgxp = new RegExp(/\d/);
	const validLength = 10;

	const { value } = e.target;

	// upperRgxp.test(value)
	// 	? upper.classList.add('done')
	// 	: upper.classList.remove('done')
	// numberRgxp.test(value)
	// 	? number.classList.add('done')
	// 	: number.classList.remove('done')
	// value.length >= validLength
	// 	? len.classList.add('done')
	// 	: len.classList.remove('done')
	upper.classList.toggle('done', upperRgxp.test(value))
	number.classList.toggle('done', numberRgxp.test(value))
	len.classList.toggle('done', value.length >= validLength)

}

passInput.addEventListener('input', handleChange, false)
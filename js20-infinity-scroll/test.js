var x = 3;

const o = {
	x: 1,
	bar: {
		x: 2,
		baz:() => {
			 return this.x;
		}
	}
}

var go = o.bar.baz;
console.log(go());

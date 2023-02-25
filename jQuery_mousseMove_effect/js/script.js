$(function(){
	$(document).on('mousemove', function(e){
		let x = e.pageX;
		let y = e.pageY;
		$('.light').css({
			"background": `radial-gradient(circle at ${x}px ${y}px, transparent, #000 30%)`,
		})
	})
})
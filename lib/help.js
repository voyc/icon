voyc.Icon.prototype['help'] = function(opt) {
	var ctx = opt.ctx
	var w = opt.w
	var h = opt.h

	ctx.fillStyle = opt.color
	ctx.strokeStyle = opt.color
	ctx.lineWidth = 3
	ctx.lineCap = 'round'

	// three-quarter circle
	var x = w / 2
	var y = h * .3
	var radius = w * .2
	var startAngle = Math.PI
	var endAngle = Math.PI * .42
	var counterClockwise = false
	ctx.beginPath()
	ctx.arc( x, y, radius, startAngle, endAngle, counterClockwise )
	ctx.stroke()

	// stem
	var x = w / 2
	var y = h * .65
	ctx.lineTo(x,y)
	ctx.stroke()

	// dot
	var x = w / 2
	var y = h * .85
	var radius = w * .07
	var startAngle = 0
	var endAngle = 2 * Math.PI
	var counterClockwise = false
	ctx.beginPath()
	ctx.arc( x, y, radius, startAngle, endAngle, counterClockwise )
	ctx.fill()





//	// draw head
//	var x = w / 2;
//	var y = h * .27;
//	var radius = parseInt(Math.min(w,h),10) * .25;
//	var startAngle = .15 * Math.PI;
//	var endAngle = .14 * Math.PI;
//	var counterClockwise = false;
//	ctx.beginPath();
//	ctx.arc( x, y, radius, startAngle, endAngle, counterClockwise );
//	ctx.fill();
//
//	// draw shoulders
//	y = h + (h * .07);
//	radius = parseInt(Math.min(w,h),10) * .5;
//	startAngle = 1.05 * Math.PI;
//	endAngle = 1.95 * Math.PI;
//	ctx.beginPath();
//	ctx.arc( x, y, radius, startAngle, endAngle, counterClockwise );
//	ctx.fill();
}

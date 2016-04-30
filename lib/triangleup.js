Icon.prototype['triangleup'] = function(opt) {
	var ctx = opt.ctx;
	var w = opt.w;
	var h = opt.h;
	ctx.fillStyle = opt.color;

	var t = h * .25;
	var b = h * .75;
	
	ctx.moveTo(0,b);
	ctx.lineTo(w,b);
	ctx.lineTo(w/2,t);
	ctx.closePath();
	ctx.fill();
}
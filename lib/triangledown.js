Icon.prototype['triangledown'] = function(opt) {
	var ctx = opt.ctx;
	var w = opt.w;
	var h = opt.h;
	ctx.fillStyle = opt.color;

	var t = h * .25;
	var b = h * .75;
	
	ctx.moveTo(0,t);
	ctx.lineTo(w,t);
	ctx.lineTo(w/2,b);
	ctx.closePath();
	ctx.fill();
}
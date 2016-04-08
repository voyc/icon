Icon.prototype.x = function(opt) {
	var ctx = opt.ctx;
	var w = opt.w;
	var h = opt.h;

	ctx.strokeStyle = opt.color;
	ctx.lineWidth = w * .1;

	ctx.moveTo(0,0);
	ctx.lineTo(w,h);
	ctx.stroke();

	ctx.moveTo(w,0);
	ctx.lineTo(0,h);
	ctx.stroke();
}

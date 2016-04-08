Icon.prototype.pencil = function(opt) {
	var ctx = opt.ctx;
	var w = opt.w;
	var h = opt.h;

	ctx.strokeStyle = opt.color;
	ctx.lineWidth = w * .05;

	var m = w * .05;
	var p = w * .2;

	var pts = [
		// body
		{x:0+p+m, y:h-p+m},
		{x:w-p+m, y:0+p+m},
		{x:w-p-m, y:0+p-m},
		{x:0+p-m, y:h-p-m},

		// point
		{x:0+p-m, y:h-p-m},
		{x:0+p+m, y:h-p+m},
		{x:0+m,   y:h-m},
		{x:0+p-m, y:h-p-m},
	];

	ctx.beginPath();
	this.drawPoly(ctx,pts);
	ctx.closePath();
	ctx.stroke();
}

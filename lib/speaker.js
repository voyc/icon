Icon.prototype['speaker'] = function(opt) {
	var ctx = opt.ctx;
	var w = opt.w;
	var h = opt.h;
	ctx.fillStyle = opt.color;
	ctx.strokeStyle = opt.color;

	ctx.lineJoin = 'round';
	ctx.lineCap = 'round';
	ctx.lineWidth = w * .07;

	var m = w * .5;
	var p = h/2;
	var q = w * .06;
	var cone = [
		{x:q, y:p},
		{x:m, y:0},
		{x:m, y:h},
	];
	ctx.beginPath();
	this.drawPoly(ctx,cone);
	ctx.closePath();
	ctx.fill();

	var b = h * .35;
	var c = h * .65; 
	var driver = [
		{x:0, y:b},
		{x:m, y:b},
		{x:m, y:c},
		{x:0, y:c},
	];
	ctx.beginPath();
	this.drawPoly(ctx,driver);
	ctx.closePath();
	ctx.fill();

	ctx.beginPath();
	var cx = w * .45;
	var cy = h/2;
	var r = w * .5;
	ctx.arc(cx,cy,r,1.7*Math.PI,0.3*Math.PI);
	ctx.stroke();

	ctx.beginPath();
	var cx = w * .45;
	var r = w * .3;
	ctx.arc(cx,cy,r,1.7*Math.PI,0.3*Math.PI);
	ctx.stroke();
}

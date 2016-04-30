Icon.prototype['grid'] = function(opt) {
	var ctx = opt.ctx;
	var w = opt.w;
	var h = opt.h;

	var g = 12;
	var n = Math.max(Math.floor(w/g), 2);
	g = Math.floor(w / n);
	
	ctx.strokeStyle = opt.color;
	ctx.lineWidth = 1;

	ctx.beginPath();

	// verticals
	for (var x = 0.5; x < w-(.5*g); x += g) {
		ctx.moveTo(x, 0);
		ctx.lineTo(x, h);
	}
	x = w - .5;
	ctx.moveTo(x, 0);
	ctx.lineTo(x, h);

	// horizontals
	for (var y = 0.5; y < h-(.5*g); y += g) {
		ctx.moveTo(0, y);
		ctx.lineTo(w, y);
	}
	y = h - .5;
	ctx.moveTo(0, y);
	ctx.lineTo(w, y);

	ctx.stroke();
}

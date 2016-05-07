voyc.Icon.prototype['menu'] = function(opt) {
	var ctx = opt.ctx;
	var w = opt.w;
	var h = opt.h;

	ctx.strokeStyle = opt.color;
	ctx.lineWidth = h * .20;

	var numLines = 3;
	var margin = w * .10;
	var r = margin;
	var l = w - margin;
	var y = h * .20;
	
	for (var i=0; i<numLines; i++) {
		ctx.moveTo(r,y);
		ctx.lineTo(l,y);
		ctx.stroke();
		y += h * .30;
	}
}
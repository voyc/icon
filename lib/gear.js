/**
	borrowed from:
		Gear version 1.0
		Epistemex (c) 2014
		www.epistemex.com
**/
voyc.Icon.prototype['gear'] = function(opt) {
	var ctx = opt.ctx;
	var w = opt.w;
	var h = opt.h;
	var r = w/2;

	var notches		= opt.notches || 8,
		radiusO		= opt.radiusOuter || r,
		radiusI		= opt.radiusInner || r * .7,
		radiusH		= r * .5,
		taperO		= opt.taperOuter || 40,
		taperI		= opt.taperInner || 10,
		offset		= opt.angleOffset || 1, //0,
		fill		= opt.fill || opt.color,
		stroke		= opt.stroke || opt.color,
		lineWidth	= opt.lineWidth || 1,

		pi2			= 2 * Math.PI,
		angle		= pi2 / (notches * 2),
		taperAI		= angle * taperI * 0.005,
		taperAO		= angle * taperO * 0.005,
		a			= angle,
		toggle		= false,

		cx, cy;

	cx = w * 0.5;
	cy = h * 0.5;

	if (offset !== 0) {
		ctx.translate(cx, cy);
		ctx.rotate(offset);
		ctx.translate(-cx, -cy);
	}

	ctx.moveTo(cx + radiusO * Math.cos(taperAO), cy + radiusO * Math.sin(taperAO));

	var max = pi2 + (pi2*.1);
	for(; a <= max; a += angle) {

		if (toggle) {
			ctx.lineTo(cx + radiusI * Math.cos(a - taperAI), cy + radiusI * Math.sin(a - taperAI));
			ctx.lineTo(cx + radiusO * Math.cos(a + taperAO), cy + radiusO * Math.sin(a + taperAO));
		}
		else {
			ctx.lineTo(cx + radiusO * Math.cos(a - taperAO), cy + radiusO * Math.sin(a - taperAO));
			ctx.lineTo(cx + radiusI * Math.cos(a + taperAI), cy + radiusI * Math.sin(a + taperAI));
		}

		toggle = !toggle;
	}

	ctx.closePath();

	if (fill) {
		ctx.fillStyle = fill;
		ctx.fill();
	}

	if (stroke) {
		ctx.lineWidth = lineWidth;
		ctx.strokeStyle = stroke;
		ctx.stroke();
	}

	// Punch hole in gear
	if (radiusH > 0) {
		ctx.beginPath();
		ctx.globalCompositeOperation = 'destination-out';
		ctx.moveTo(cx + radiusH, cy);
		ctx.arc(cx, cy, radiusH, 0, pi2);
		ctx.closePath();

		ctx.fill();

		if (stroke) {
			ctx.globalCompositeOperation = 'source-over';
			ctx.stroke();
		}
	}
}
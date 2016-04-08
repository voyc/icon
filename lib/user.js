Icon.prototype.user = function(opt) {
	var ctx = opt.ctx;
	var w = opt.w;
	var h = opt.h;

	ctx.fillStyle = opt.color;


	// draw head
	var x = w / 2;
	var y = h * .27;
	var radius = parseInt(Math.min(w,h)) * .25;
	var startAngle = .15 * Math.PI;
	var endAngle = .14 * Math.PI;
	var counterClockwise = false;
	ctx.beginPath();
	ctx.arc( x, y, radius, startAngle, endAngle, counterClockwise );
	ctx.fill();

	// draw shoulders
	y = h + (h * .07);
	radius = parseInt(Math.min(w,h)) * .5;
	startAngle = 1.05 * Math.PI;
	endAngle = 1.95 * Math.PI;
	ctx.beginPath();
	ctx.arc( x, y, radius, startAngle, endAngle, counterClockwise );
	ctx.fill();

	
	return;	
	// draw point, triangle a,b,c
	ctx.beginPath();

	// center of triangle base
	var tx = x + radius * Math.cos( endAngle );
	var ty = y + radius * Math.sin( endAngle );
	ctx.moveTo( tx, ty ); 

	var ax = tx + (triangleSide / 2 ) * Math.cos( endAngle );
	var ay = ty + (triangleSide / 2 ) * Math.sin( endAngle );
	ctx.lineTo ( ax, ay );
	
	var bx = tx + ( Math.sqrt( 3 ) / 2 ) * triangleSide * ( Math.sin( -endAngle ));
	var by = ty + ( Math.sqrt( 3 ) / 2 ) * triangleSide * ( Math.cos( -endAngle ));
	ctx.lineTo(bx,by);
	
	var cx = tx - ( triangleSide / 2 ) * Math.cos( endAngle );
	var cy = ty - ( triangleSide / 2 ) * Math.sin( endAngle );
	ctx.lineTo( cx,cy );
	
	ctx.closePath();
	ctx.stroke();
}

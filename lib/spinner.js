Icon.prototype['spinner'] = function(opt) {
	var ctx = opt.ctx;
	var w = opt.w;
	var h = opt.h;

	var x = w / 2;
	var y = h / 2;
	var radius = parseInt(Math.min(w,h),10) * .35;
	var startAngle = .15 * Math.PI;
	var endAngle = 1.75 * Math.PI;
	var counterClockwise = false;

	var arrowStrength = radius * .5;
	var triangleSide = radius * .5;  

	ctx.lineWidth = arrowStrength;   
	ctx.strokeStyle = opt.color;

	// draw body, circle
	ctx.beginPath();
	ctx.arc( x, y, radius, startAngle, endAngle, counterClockwise );
	ctx.stroke();

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

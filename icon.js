function Icon() {
	this.icons = [];
}

Icon.prototype = {
	attachAll: function() {
		var icons = document.querySelectorAll('icon[type=draw]');
		var icon;
		for (var i=0; i<icons.length; i++) {
			this.icons.push(icons[i]);
			icons[i].appendChild(document.createElement('canvas'));
		}
	},

	drawAll: function() {
		for (var i=0; i<this.icons.length; i++) {
			this.draw(this.icons[i]);
		}
	},

	draw: function(icon) {
		var opt = {};
		var canvas = icon.firstChild;
		var style = window.getComputedStyle(icon);
		opt.w = canvas.width = parseInt(style.width);
		opt.h = canvas.height = parseInt(style.height);
		opt.ctx = canvas.getContext('2d');
		opt.color = style.color;
		var name = icon.getAttribute('name');
		this[name](opt);
	},
	
	drawPoly: function(ctx, a) {
		ctx.moveTo(a[0].x, a[0].y);
		for (var i=1; i<a.length; i++) {
			ctx.lineTo(a[i].x, a[i].y);
		}
	},
}

addEventListener('load', function() {
	if (typeof(voyc) == 'undefined') voyc = {};
	voyc.icon = new Icon();
	voyc.icon.attachAll();
	voyc.icon.drawAll();
}, false);
addEventListener('resize', function() {
	voyc.icon.drawAll();
}, false);

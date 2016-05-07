/**
	class voyc.Icon
		singleton
		@constructor
		draws icons in HTML elements defined with icon tagname
		Example: <icon name=menu/>
**/
voyc.Icon = function() {
	// is singleton
	if (voyc.Icon._instance) return voyc.Icon._instance;
	else voyc.Icon._instance = this;
	
	this.icons = [];
}

voyc.Icon.prototype = {
	attachAll: function(element) {
		var elem = element || document;
		var icons = elem.querySelectorAll('icon[type=draw]');
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
		opt.w = canvas.width = parseInt(style.width,10);
		opt.h = canvas.height = parseInt(style.height,10);
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
	var icon = new voyc.Icon();
	icon.attachAll(document);
	icon.drawAll();
}, false);
addEventListener('resize', function() {
	(new voyc.Icon()).drawAll();
}, false);

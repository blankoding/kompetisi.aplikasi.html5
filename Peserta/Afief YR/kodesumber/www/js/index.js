'use strict';
window.addEventListener("load", onWindowLoaded);
window.onbeforeunload = onBeforeUnload;

function onWindowLoaded() {
	document.addEventListener('deviceready', onDeviceReady, false);
}

function onDeviceReady() {
	//plugins
	preparingPlugins();

	//init app
	var app = new App();
	app.init();
}

function onBeforeUnload() {
	return "Keluar dari aplikasi?";
}

function preparingPlugins() {
	//javascript show hide events
	(function ($) {
		$.each(['show', 'hide'], function (i, ev) {
			var el = $.fn[ev];
			$.fn[ev] = function () {
				this.trigger(ev);
				return el.apply(this, arguments);
			};
		});
	})(jQuery);
}

function serialArrayToObject(ar) {
	var res = {};
	for (var i = 0; i < ar.length; i++) {
		res[ar[i].name] = ar[i].value;
	}
	return res;
}
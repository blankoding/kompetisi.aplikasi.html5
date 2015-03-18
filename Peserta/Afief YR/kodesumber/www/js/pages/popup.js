var Popup = function(el) {
	popupInstance = this;
	var ini = this;
	this.el = el;

	var elAlert = this.el.find(".alert");
	var elHeader = this.el.find(".header");
	var elContent = this.el.find(".content");

	var btTutup = this.el.find("button.tutup");
	btTutup.click(function() {
		ini.hide();
	});

	this.show = function(txt, header) {
		elContent.html(txt);
		if (header) {
			elHeader.html(header);
			elHeader.show();
		} else {
			elHeader.hide();
		}
		this.el.show();

		elAlert.css("margin-left", 0 - elAlert.width()/2);
		elAlert.css("margin-top", 0 - elAlert.height()/2);

		window.setTimeout(function() {
			btTutup[0].focus();
		}, 100);
	}
	this.hide = function() {
		this.el.hide();
	}
}
var popupInstance;
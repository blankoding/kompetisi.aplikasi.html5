var PagePasien = function(el) {
	var ini = this;
	this.el = el;

	this.events = new ObjectEvents();

	this.el.find("#btRekamMedis").click(function() {
		ini.events.send("rekammedis");
	});

	this.show = function(data) {
		var _e;
		for (var k in data) {
			_e = this.el.find("." + k);
			_e.html(data[k]);
			_e.addClass("done");
		}
		this.el.show();
	}
}
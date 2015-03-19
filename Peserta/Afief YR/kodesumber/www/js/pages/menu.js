var PageMenu = function(el) {
	var ini = this;
	this.el = el;

	this.events = new ObjectEvents();
	this.el.find(".pasienbaru").click(onPasienBaruClick);
	this.el.find(".caripasien").click(onCariPasienClick);
	this.el.find(".pengaturan").click(onPengaturanClick);

	function onPasienBaruClick() {
		ini.events.send("pasienbaru");
	}
	function onCariPasienClick() {
		ini.events.send("caripasien");
	}
	function onPengaturanClick() {
		ini.events.send("pengaturan");
	}

	this.show = function() {
		this.el.show();
	}
}
var SideMenu = function(el) {
	var ini = this;
	var isShow = false;
	this.el = el;

	this.events = new ObjectEvents();

	this.el.show();
	this.el.css("right", 0-this.el.width());

	this.el.find(".pasienbaru").click(onPasienBaru);
	this.el.find(".caripasien").click(onCariPasien);
	this.el.find(".laporan").click(onLaporan);
	this.el.find(".datalain").click(onDataLain);
	this.el.find(".pengaturan").click(onPengaturanClick);

	function onPasienBaru() {
		ini.events.send("pasienbaru");
		ini.hide();
	}
	function onCariPasien() {
		ini.events.send("caripasien");
		ini.hide();
	}
	function onLaporan() {
		ini.events.send("laporan");
		ini.hide();
	}
	function onDataLain() {
		ini.events.send("datalain");
		ini.hide();
	}
	function onPengaturanClick() {
		ini.events.send("pengaturan");
		ini.hide();
	}

	this.showHide = function() {
		if (isShow)
			this.hide();
		else
			this.show();
	}

	this.show = function() {
		this.el.css("right", "0px");
		isShow = true;
	}
	this.hide = function() {
		this.el.css("right", 0-this.el.width());
		isShow = false;
	}
}
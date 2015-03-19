var PagePasienBaru = function(el) {
	this.el = el;

	var ini = this;
	var inputs = this.el.find("input, select, textarea");

	this.events = new ObjectEvents();

	this.el.find("form").submit(onFormSubmit);

	inputs.bind("change blur", onIsianChanged);
	inputs.bind("focus", onIsianFocus);
	this.el.find(".tanggallahir").bind("change", onTanggalLahirChanged);

	this.el.bind("hide", onHide);

	function onFormSubmit(e) {
		e.preventDefault();

		var obj = serialArrayToObject($(e.currentTarget).serializeArray());
		user.tambahPasien(obj, function(res, msg) {
			if (res) {
				ini.events.send("success", obj);
			} else {
				if (msg)
					popupInstance.show(msg, "Pasien Baru");
			}
		});
	}

	function onTanggalLahirChanged() {
		var ttl = ini.el.find(".tanggallahir").val();
		ini.el.find(".umur").val(hitungUmur(ttl));
		ini.el.find(".umur").addClass("done");
	}
	function onIsianFocus(e) {
		var el = $(e.currentTarget);
		el.removeClass('done');
	}
	function onIsianChanged(e) {
		var el = $(e.currentTarget);
		if (el.val() != "")
			el.addClass("done");
	}

	//mencari umur
	function hitungUmur(txt) {
		var birthday = new Date(txt);
		var ageDifMs = Date.now() - birthday.getTime();
		var ageDate = new Date(ageDifMs);
		return Math.abs(ageDate.getUTCFullYear() - 1970);
	}

	function onHide() {
		inputs.removeClass("done");
		inputs.val('');
	}
	this.show = function() {
		this.el.show();
	}
}
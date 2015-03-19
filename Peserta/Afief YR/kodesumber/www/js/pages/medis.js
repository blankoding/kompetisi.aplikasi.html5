var PageMedis = function(el) {
	this.el = el;

	var ini = this;
	var inputs = this.el.find("input, select, textarea");

	this.events = new ObjectEvents();

	this.el.find("form").submit(onFormSubmit);

	inputs.bind("change blur", onIsianChanged);
	inputs.bind("focus", onIsianFocus);

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

	function onIsianFocus(e) {
		var el = $(e.currentTarget);
		el.removeClass('done');
	}
	function onIsianChanged(e) {
		var el = $(e.currentTarget);
		if (el.val() != "")
			el.addClass("done");
	}

	function onHide() {
		inputs.removeClass("done");
		inputs.val('');
	}
	this.show = function() {
		this.el.show();
	}
}
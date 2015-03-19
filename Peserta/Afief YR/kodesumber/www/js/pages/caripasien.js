var PageCariPasien = function(el) {
	this.el = el;
	this.events = new ObjectEvents();

	var ini = this;

	this.el.find("form").submit(onFormSubmit);

	function onFormSubmit(e) {
		e.preventDefault();

		var obj = serialArrayToObject($(e.currentTarget).serializeArray());
		console.log(obj);
		user.cariPasien(obj, function(res, msg) {
			if (res) {
				ini.events.send("success", msg);
			} else {
				if (msg)
					popupInstance.show(msg, "Cari Pasien");
			}
		});
	}

	this.show = function() {
		this.el.show();
	}
}
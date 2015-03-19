var PageHasilPencarian = function(el) {
	this.el = el;

	var ini = this;
	var list = el.find(".daftar");
	this.events = new ObjectEvents();

	this.show = function(data) {
		this.el.show();

		if (data) {
			list.children().remove();
			for (var i = 0; i < data.length; i++) {
				_el = createBox(data[i]);
			}
		}
	}

	function createBox(dat) {
		var umur = "";
		if (dat.tanggallahir != "0000-00-00")
			umur = hitungUmur(dat.tanggallahir) + " tahun";
		var _el = createEl("", {
			nomormedis: dat.nomormedis,
			namalengkap: dat.namalengkap,
			umur: umur,
			alamatrumah: dat.alamatrumah + " " + dat.kota
		}, "li");
		list.append(_el);

		_el.click(function() {
			ini.events.send("click", dat);
		});
	}
	function createEl(nama, content, elName) {
		elName = elName || "div";

		var el = $("<" + elName + "></" + elName +">");
		el.addClass(nama);
		if (typeof content == "object") {
			for (var k in content) {
				el.append(createEl(k, content[k]));
			}
		} else {
			el.html(content);
		}
		return el;
	}
	function hitungUmur(txt) {
		var birthday = new Date(txt);
		var ageDifMs = Date.now() - birthday.getTime();
		var ageDate = new Date(ageDifMs);
		return Math.abs(ageDate.getUTCFullYear() - 1970);
	}
}
var UserDB = function(elLoading) {
	var ini = this;
	var baseUrl = "http://putus.in/medisserver/";

	if (elLoading)
		elLoading.hide();

	this.events = new ObjectEvents();
	this.username = "";
	this.email = "";
	this.key = "";

	ambilLocalKey();
	function ambilLocalKey() {
		var userkey = localStorage.getItem("userkey");
		if (userkey != null)
			ini.key = userkey;
	}
	function simpanLocalKey() {
		localStorage.setItem("userkey", ini.key);
	}


	this.cekLogin = function(callback) {
		
		if (ini.key != "") {
			ini.query("user",
				{key: ini.key},
				function(data) {
					//console.log(ini.key, data);
					if (data.status) {
						ini.username = data.data.username;
						ini.email = data.data.email;

						simpanLocalKey();
						callback(true);
					} else {
						callback(false);
					}
				},
				function(err) {
					console.log("error", err);
					callback(false);
				}
				);
		} else {
			callback(false);
		}
		
	}


	this.login = function(username, password, callback) {

		ini.query("login",
		{
			username: username,
			password: password
		},
		function(data) {
			if (data.status) {
				ini.key = data.key;
				ini.username = username;

				simpanLocalKey();
				callback(true);
			} else {
				callback(false);
			}
		},
		function(err) {
			callback(false);
		}
		);
	}

	this.logout = function(key, callback) {

		ini.query("logout",
		{
			key: key
		},
		function(data) {
			console.log("Logouting", data);
			if (data.status) {
				callback(true);
			} else {
				callback(false);
			}
		},
		function(err) {
			callback(false);
		}
		);
	}

	this.query= function(permalink, data, success, failed, method) {
		ini.events.send("loading");
		if (elLoading)
			elLoading.show();

		method = method || "POST";
		success = success || function() {};
		failed = failed || function() {};

		$.ajax({
			url: baseUrl + permalink,
			method: method,
			dataType: "json",
			data: data,
			success: onSuccess,
			error: onFailed
		});

		function onSuccess() {
			ini.events.send("success");
			success.apply(this, arguments);

			if (elLoading)
				elLoading.hide();
		}
		function onFailed() {
			ini.events.send("failed");
			failed.apply(this, arguments);

			if (elLoading)
				elLoading.hide();
		}
	}


	//medis
	this.tambahPasien = function(data, callback) {
		data.key = ini.key;

		ini.query("pasien/tambah", data,
		function(data) {
			console.log("tambah pasien", data);
			if (data.status) {
				callback(true);
			} else {
				callback(false, data.message);
			}
		},
		function(err) {
			callback(false, "Koneksi ke server gagal");
		}
		);
	}
	this.cariPasien = function(data, callback) {
		data.key = ini.key;

		ini.query("pasien/cari", data,
		function(data) {
			console.log("cari pasien", data);
			if (data.status) {
				callback(true, data.data);
			} else {
				callback(false, data.message);
			}
		},
		function(err) {
			callback(false, "Koneksi ke server gagal");
		}
		);
	}
}
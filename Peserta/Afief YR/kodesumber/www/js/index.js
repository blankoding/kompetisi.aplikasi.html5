window.addEventListener("load", onWindowLoaded);

function onWindowLoaded() {
    document.addEventListener('deviceready', onDeviceReady, false);
}

function onDeviceReady() {
    var app = new App();
    app.init();
}

function serialArrayToObject(ar) {
	var res = {};
	for (var i = 0; i < ar.length; i++) {
		res[ar[i].name] = ar[i].value;
	}
	return res;
}
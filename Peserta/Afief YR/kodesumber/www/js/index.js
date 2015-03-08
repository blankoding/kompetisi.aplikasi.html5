window.addEventListener("load", onWindowLoaded);

function onWindowLoaded() {
    document.addEventListener('deviceready', onDeviceReady, false);
}

function onDeviceReady() {
    var app = new App();
    app.init();
}
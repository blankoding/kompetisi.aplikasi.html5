var App = function() {

	var pages = $(".pages");
	var pageLogin = new PageLogin($("#pagelogin"));
	var pageMenu = new PageMenu($("#pagemenu"));

	pages.hide();

	this.init = function() {
		bindingEvents();
		user.cekLogin(function(res) {
			if (!res) {
				//user not logged in
				pageLogin.show();
			} else {
				//user logged in
				onLogin();
			}
		});
	}
	function bindingEvents() {
		pageLogin.events.on("login", onLogin);
	}
	function onLogin() {
		pages.hide();
		pageMenu.show();
	}
}
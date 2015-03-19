var PageSetting = function(el) {
	var ini = this;
	this.el = el;

	this.events = new ObjectEvents();

	this.el.find(".logout").click(onLogoutClick);

	function onLogoutClick() {
		user.logout(user.key, function(res) {
			ini.events.send("logout");
		});
	}

	this.show = function() {
		this.el.show();
	}
}
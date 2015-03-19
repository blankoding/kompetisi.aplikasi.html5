var PageLogin = function(el) {
	var el = el;
	var ini = this;

	this.events = new ObjectEvents();

	el.find("form").submit(function(e) {
		e.preventDefault();
		data = $(e.currentTarget).serializeArray();

		user.login(data[0].value, data[1].value, onLogin);		
	});

	function onLogin(res) {
		if (res) {
			ini.events.send("login");
		} else {
			ini.events.send("loginfail");
		}
	}

	this.show = function() {
		el.show();
	}
}
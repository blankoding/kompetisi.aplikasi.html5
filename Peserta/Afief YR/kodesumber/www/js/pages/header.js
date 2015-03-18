var Header = function(el) {
	var ini = this;
	var backCallback = null;
	this.el = el;
	this.el.find(".iconmenu").click(onMenuClick);
	this.el.find(".back").click(onBackClick);

	this.events = new ObjectEvents();

	function onMenuClick() {
		ini.events.send("menuclick");
	}
	function onBackClick() {
		if (backCallback) {
			var _tc = backCallback;
			ini.hide();
			_tc();
		}
	}

	this.show = function(txt, icon, back) {
		if (txt)
			this.el.find("h1").html(txt);

		if (icon) {
			this.el.find(".icondata > li").removeClass();
			this.el.find(".icondata > li").addClass('fa');
			this.el.find(".icondata > li").addClass('fa-' + icon);
		}
		if (back) {
			backCallback = back;
			this.el.find(".back").show();
		} else {
			this.el.find(".back").hide();
		}
		$(".pages").addClass("withheader");
		this.el.show();
	}
	this.hide = function() {
		this.el.hide();
		$(".pages").removeClass("withheader");
		backCallback = null;
	}
}
var App = function() {

	var pages = $(".pages");
	var header = new Header($("#header"));
	var sideMenu = new SideMenu($("#sidemenu"));
	var popup = new Popup($("#popup"));

	var pageLogin = new PageLogin($("#pagelogin"));
	var pageMenu = new PageMenu($("#pagemenu"));
	var pagePasien = new PagePasien($("#pagepasien"));
	var pagePasienBaru = new PagePasienBaru($("#pagepasienbaru"));
	var pageSetting = new PageSetting($("#pagesetting"));

	pages.hide();

	this.init = function() {
		bindingEvents();
		user.cekLogin(function(res) {
			if (!res) {
				//user not logged in
				pageLogin.show();
			} else {
				//user logged in
				showMenu();
			}
		});
	}
	function bindingEvents() {
		header.events.on("menuclick", showSideMenu);

		sideMenu.events.on("pengaturan", showPengaturan);

		pageLogin.events.on("login", showMenu);

		pagePasienBaru.events.on("success", showPasien)

		pageMenu.events.on("pasienbaru", showPasienBaru)
		pageMenu.events.on("pengaturan", showPengaturan);

		pageSetting.events.on("logout", showLogin);
	}
	function showSideMenu() {
		sideMenu.showHide();
	}

	function showLogin() {
		pages.hide();
		pageLogin.show();
	}
	function showMenu() {
		pages.hide();
		pageMenu.show();
	}
	function showPasien(data) {
		pages.hide();
		
		pagePasien.show(data);
	}
	function showPasienBaru() {
		pages.hide();
		header.show("Pasien Baru", "plus");
		pagePasienBaru.show();
	}
	function showPengaturan() {
		pages.hide();
		header.show("Pengaturan", "gear");
		pageSetting.show();
	}
}
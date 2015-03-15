var user;
var App = function() {

	var pages = $(".pages");
	var header = new Header($("#header"));
	var sideMenu = new SideMenu($("#sidemenu"));
	var popup = new Popup($("#popup"));

	var pageLogin = new PageLogin($("#pagelogin"));
	var pageMenu = new PageMenu($("#pagemenu"));
	var pagePasien = new PagePasien($("#pagepasien"));
	var pagePasienBaru = new PagePasienBaru($("#pagepasienbaru"));
	var pageCariPasien = new PageCariPasien($("#pagecaripasien"));
	var pageHasilPencarian = new PageHasilPencarian($("#pagehasilpencarian"));
	var pageSetting = new PageSetting($("#pagesetting"));

	hideAll();

	this.init = function() {
		user = new UserDB();
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

		sideMenu.events.on("pasienbaru", showPasienBaru);
		sideMenu.events.on("caripasien", showCariPasien);
		sideMenu.events.on("pengaturan", showPengaturan);

		pageLogin.events.on("login", showMenu);

		pagePasienBaru.events.on("success", function(dat) {
			showPasien(dat, showMenu);
		});

		pageMenu.events.on("pasienbaru", showPasienBaru);
		pageMenu.events.on("caripasien", showCariPasien);
		pageMenu.events.on("pengaturan", showPengaturan);

		pageCariPasien.events.on("success", showHasilPencarian);
		pageHasilPencarian.events.on("click", function(dat) {
			showPasien(dat, showHasilPencarian);
		});

		pageSetting.events.on("logout", showLogin);
	}
	function showSideMenu() {
		sideMenu.showHide();
	}

	function showLogin() {
		hideAll();
		pageLogin.show();
	}
	function showMenu() {
		hideAll();
		pageMenu.show();
	}
	function showPasien(data, back) {
		hideAll();
		header.show("Pasien", "plus", back);
		pagePasien.show(data);
	}
	function showPasienBaru() {
		hideAll();
		header.show("Pasien Baru", "plus", showMenu);
		pagePasienBaru.show();
	}
	function showCariPasien() {
		hideAll();
		header.show("Cari Pasien", "search", showMenu);
		pageCariPasien.show();
	}
	function showPengaturan() {
		hideAll();
		header.show("Pengaturan", "gear", showMenu);
		pageSetting.show();
	}
	function showHasilPencarian(data) {
		hideAll();
		header.show("Hasil Pencarian", "search", showCariPasien);
		pageHasilPencarian.show(data);
	}

	function hideAll() {
		pages.hide();
		header.hide();
		sideMenu.hide();
	}

}
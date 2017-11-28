//start MOBILE NAV
$('#mobnav-btn').click(function() {
	$("html").toggleClass("mobile-menu-open");
	$(".xnav-wrapper").delay(500).queue(function(reset_scroll) {
		$(this).scrollTop(0);
		reset_scroll();
	});
});
$('.closebtn').click(function() {
	$("html").toggleClass("mobile-menu-open");
	$(".xnav-wrapper").delay(500).queue(function(reset_scroll) {
		$(this).scrollTop(0);
		reset_scroll();
	});
});
// end MOBILE NAV

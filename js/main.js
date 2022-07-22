


$(document).ready(function() {

	/* Hide mobile menu after clicking on a link
	 -----------------------------------------------*/
	$('.navbar-collapse a').click(function(){
		$(".navbar-collapse").collapse('hide');
	});


	/* jQuery to collapse the navbar on scroll
	 -----------------------------------------------*/
	$(window).scroll(function() {
		if ($(".navbar").offset().top > 50) {
			$(".navbar-fixed-top").addClass("top-nav-collapse");
		} else {
			$(".navbar-fixed-top").removeClass("top-nav-collapse");
		}
	});


	/* This wow need for nav
	 -------------------------------*/
	new WOW({ mobile: false }).init();

});






























/*
blood slider
 */
$('.carousel').carousel({
	interval: 5000
})





/*
blood group list
 */
function toggleIcon(e) {
	$(e.target)
		.prev('.panel-heading')
		.find(".more-less")
		.toggleClass('glyphicon-plus glyphicon-minus');
}
$('.panel-group').on('hidden.bs.collapse', toggleIcon);
$('.panel-group').on('shown.bs.collapse', toggleIcon);




/*
photo gallary
 */
new Viewer(document.getElementById('gallery'));






/****
 =============================================
 for Scroll Up
 =============================================
 *****/

$(window).scroll(function(){
	if ($(this).scrollTop() > 100) {
		$('.scrollup').fadeIn();
	} else {
		$('.scrollup').fadeOut();
	}
});

$('.scrollup').click(function(){
	$("html, body").animate({ scrollTop: 0 }, 1000);
	return false;
});

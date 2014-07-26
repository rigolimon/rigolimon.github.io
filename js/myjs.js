$(document).ready(function() {



	
$('.top-nav a').click( function() {
		
	$('.top-nav a').removeClass('active');
	$(this).addClass('active');

});

$('#link-home').click(function(e) {
	e.preventDefault();

	$('html, body').animate({
			scrollTop: $('#home').offset().top
	}, 'slow');

});

$('#link-profile').click(function(e) {
	e.preventDefault();

	$('html, body').animate({
			scrollTop: $('#profile').offset().top
	}, 'slow');
});


$('#link-portfolio').click(function(e) {
	e.preventDefault();

	$('html, body').animate({
			scrollTop: $('#portfolio').offset().top
	}, 'slow');
});

$('#link-contact').click(function(e) {
	e.preventDefault();

	$('html, body').animate({
			scrollTop: $('#contact').offset().top
	}, 'slow');
});



});


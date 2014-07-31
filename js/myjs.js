$(function() {


/* ANIMATED HEADINGS */
$('.animated-heading').fadeIn(2000, function() {
	$(this).animate({
		top:"260px"
	}, 2000);
});

/* ACTIVE LINK */
$('.top-nav a').click( function() {
		
	$('.top-nav a').removeClass('active');
	$(this).addClass('active');

});


/* SMOOTH SCROLL */
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

/* PORTFOLIO DESCRIPTIONS */

$('.project1').mouseenter(function() {
	$('.bounce').css('opacity', '1');
	$('.test').slideToggle('slow');
});

$('.project1').mouseout(function() {
	$('.bounce').css('opacity', '0.5');
	$('.test').fadeOut(500);
});


});


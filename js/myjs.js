$(function() {


/* ANIMATED HEADINGS */
$('.animated-heading').fadeIn(2000, function() {
	$(this).animate({
		top:"280px"
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


/* ACTIVE LINKS ON SCROLL */
$(window).scroll(function() {

  var scrollTop = $(window).scrollTop();

   if (scrollTop < $('#profile').offset().top ) { 
  	$('.top-nav a').removeClass('active');
	$('#link-home').addClass('active');
  }

   if ( scrollTop > $('#profile').offset().top && 
   		scrollTop < $('#portfolio').offset().top ) { 
  	$('.top-nav a').removeClass('active');
	$('#link-profile').addClass('active');
  }

  if ( scrollTop > $('#portfolio').offset().top &&
       scrollTop < $('#contact').offset().top ) { 
  	$('.top-nav a').removeClass('active');
	$('#link-portfolio').addClass('active');
  }

  if ( scrollTop > $('#contact').offset().top ) { 
  	$('.top-nav a').removeClass('active');
	$('#link-contact').addClass('active');
  }

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

$('.project2').mouseenter(function() {
	$('.fizz').css('opacity', '1');
	$('.buzz').slideToggle('slow');
});

$('.project2').mouseout(function() {
	$('.fizz').css('opacity', '0.5');
	$('.buzz').fadeOut(500);
});

});


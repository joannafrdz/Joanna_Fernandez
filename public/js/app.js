$('.header__navbar-toggle').click(function(e) {
    e.preventDefault();
    $('.header__navbar').toggleClass('is-open');
    $('.header__navbar-toggle').toggleClass('is-open');
})

// Slow scroll
$('a[href^="#"]').click(function(){
	var the_id = $(this).attr("href");
	if (the_id === '#') {
		return;
	}
	$('html, body').animate({
		scrollTop:$(the_id).offset().top
	}, 'slow');
	return false;
});
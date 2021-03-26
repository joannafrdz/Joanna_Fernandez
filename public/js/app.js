$('.header__navbar-toggle').click(function(e) {
    e.preventDefault();
    $('.header__navbar').toggleClass('is-open');
    $('.header__navbar-toggle').toggleClass('is-open');
})
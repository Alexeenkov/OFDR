$(document).ready(function() {
    $('.header__burger-wrapper').click(function(event) {
        $('.header__burger, .header__burger-menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
});

$(document).ready(function() {
    $('.header__burger-link').click(function(event) {
        $('.header__burger, .header__burger-menu').removeClass('active');
        $('body').removeClass('lock');
    });
});
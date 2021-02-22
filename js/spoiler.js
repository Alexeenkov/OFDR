$('document').ready(function() {
    if ($(window).width() < 651) {
        $('.spoiler').click(function(event) {
            $(this).toggleClass('active').next().slideToggle(300);
        });
    }
});
$(document).ready(function() {
    var seccion2 = $('#section2');
    $(window).on('scroll', () => {
        
    });
    $('#what-is-this').click(function() {
        //window.scrollTo(0, 300);
        $("html, body").animate({scrollTop:300}, 1000);
    });
});

$(function() {
    // animations JQuery
    var $yeti = $('#yeti');
    var $transitionList = $('#transitionList');
    // test yeti
    $('#transitioner').click(function() {
        MotionUI.animateIn($yeti, $transitionList.val());
    });
    // animation menu toggle
    $(".menu-opener").click(function(){
        $(".menu-opener, .menu-opener-inner, .menu").toggleClass("active");
    });
    // animation smoothScroll
    $('.top').on('click', function() {
        var page = $(this).attr('href'); // Page cible
        var speed = 750; // Durée de l'animation (en ms)
        $('html, body').animate( {
            scrollTop: $(page).offset().top
        }, speed );
        return false;
    });
});

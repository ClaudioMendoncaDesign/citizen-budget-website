$(document).ready(function() {

// Smooth Scrolling Function
$(function() {
    $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
            || location.hostname == this.hostname) {

        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
            }
        }
    });
});


var $overlay = $('#overlay');

$('.js-menu-trigger').click( function() {
    if (!$('.b-top-nav').hasClass('m-active')) {
        $('.b-top-nav').addClass('m-active');
        $overlay.addClass('m-active');

    } else {
        $('.b-top-nav').removeClass('m-active');
        $overlay.removeClass('m-active');
    }
});

$('.b-top-nav a').click( function() {
    $('.m-active').removeClass('m-active');
});

$('.e-overview-item').hover( function() {
    $(this).toggleClass('m-active');
    // $overlay.addClass('m-active');
});

$overlay.click( function() {
    $('.m-active').removeClass('m-active');
});



$('.e-testimonial-list').slick({
    draggable: false,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
        {
            breakpoint: 1000,
            settings: {
                draggable: true,
            }
        }
    ]
});

$('.m-prev').click(function() {
    $(this).closest('.e-testimonial-item').slick('slickPrev');
});

$('.m-next').click(function() {
    $(this).closest('.e-testimonial-item').slick('slickNext');
});












}); // doc.ready


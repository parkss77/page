$(document).ready(function() {

    $('#section1 .slick').on('init reInit afterChange', function(event, slick, currentSlide, nextSlide) {
        var i = (currentSlide ? currentSlide : 0) + 1;
        $('#section1 .control .count').html('<em>' + i + '</em>' + slick.slideCount);

        if ($('.slick-slide') > 0) {
            $('#section1 .control .dots').removeClass('active');
        } else {
            $('#section1 .control .dots').addClass('active');
        }
    });

    $('#section1 .slick').on('beforeChange', function(slick, currentSlide, nextSlide) {
        $('#section1 .text_box').fadeOut();
        $('#section1 .control .dots').removeClass('active');
    });
    $('#section1 .slick').on('afterChange', function(event, slick, currentSlide, nextSlide) {
        $('#section1 .text_box').fadeIn();
        $('#section1 .control .dots').addClass('active');
    });

    $('#section1 .control button').on('click', function(e) {
        e.preventDefault();
        if ($(this).hasClass('pause')) {
            $(this).hide();
            $('#section1 .control button.play').show();
            $('#section1 .slick').slick('slickPause');
            $('#section1 .control .dots').addClass('active2');
        } else if ($(this).hasClass('play')) {
            $(this).hide();
            $('#section1 .control button.pause').show();
            $('#section1 .slick').slick('slickPlay');
            $('#section1 .control .dots').removeClass('active2');
        }
    });

    $('#section1 .slick').slick({
        variableWidth: false,
        autoplay: true,
        arrows: false,
        dots: false,
        accessibility: true,
        prevArrow: $('#section1 .prev'),
        nextArrow: $('#section1 .next'),
        draggable: true,
        infinite: true,
        fade: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover: false,
        speed: 1000,
        autoplaySpeed: 5500
    });

    $('#section3 .slick').slick({
        variableWidth: false,
        autoplay: true,
        arrows: true,
        dots: false,
        accessibility: true,
        prevArrow: $('#section1 .prev'),
        nextArrow: $('#section1 .next'),
        draggable: true,
        infinite: true,
        fade: false,
        slidesToShow: 8,
        slidesToScroll: 1,
        pauseOnHover: false,
        speed: 1000,
        autoplaySpeed: 5500,
        responsive: [{
            breakpoint: 1200,
            settings: {
                variableWidth: true,
                slidesToShow: 6,
            }
        }, ]
    });

    /*
        function scroll() {
            $(window).on('mousewheel load', function(e) {
                if (e.originalEvent.wheelDelta < 0) {
                    $('html, body').stop().animate({
                        scrollTop: '230'
                    }, 300);
                    $('#header').addClass('scroll');
                } else {
                    $('html,body').stop().animate({
                        scrollTop: '0'
                    }, 300);
                    $('#header').removeClass('scroll');
                }
                return false;
            });
        }
    */

});

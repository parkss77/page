$(document).ready(function() {

    window.addEventListener('load', function() {
        document.querySelector('.sub_box').classList.add('active');
    });

    $('.sub5_3 .slick').slick({
        variableWidth: false,
        autoplay: false,
        arrows: true,
        dots: true,
        accessibility: true,
        prevArrow: $('.sub5_3 .prev'),
        nextArrow: $('.sub5_3 .next'),
        draggable: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover: false,
        speed: 1000,
        fade: true,
        autoplaySpeed: 5500
    });

});

$(document).ready(function() {

    if ($('#header .header_top').css('display') == 'none') {
        $(window).scroll(function() {
            if ($(this).scrollTop() > 60) {
                $('#header').addClass('scroll');
            } else {
                $('#header').removeClass('scroll');
            }
        });

        $('main').addClass('pd');
    } else {
        $(window).scroll(function() {
            if ($(this).scrollTop() > 60) {
                $('#header').addClass('scroll');
                $('main').addClass('scroll');
            } else {
                $('#header').removeClass('scroll');
                $('main').removeClass('scroll');
            }
        });
        $('main').removeClass('pd');
    }

    /* mobile
    var depth1 = document.querySelectorAll('.mobile_depth1 li h2 a'),
        depth2 = document.querySelectorAll('.mobile_depth2');

    for (var i = 0; i < depth1.length; i++) {
        depth1[i].addEventListener('click', function() {
            this.parentElement.nextElement.style.display = "block";
            this.classList.add('active');
        });
    }
*/

    $('.mobile_box .mobile_depth1 li h2 a').click(function() {
        if ($(this).hasClass('active')) {
            $('.mobile_box .mobile_depth1 li h2 a').removeClass('active');
            $('.mobile_depth2').slideUp();
        } else {
            $('.mobile_box .mobile_depth1 li h2 a').removeClass('active');
            $(this).addClass('active');
            $('.mobile_depth2').slideUp();
            $(this).parent().next('.mobile_depth2').slideDown();
        }
    });
    $('#header .mobile_btn').click(function() {
        $('body').addClass('fixed');
        $('.mobile_bg').fadeIn();
        $('.mobile_box').animate({
            right: 0
        }, 500);
    });
    $('.mobile_box .mobile_close').click(function() {
        $('body').removeClass('fixed');
        $('.mobile_bg').fadeOut();
        $('.mobile_box').animate({
            right: -3000
        }, 500);
    });

    /* sitemap */
    var btn = document.querySelector('.sitemap_btn'),
        sitemap = document.querySelector('.sitemap_box'),
        sitemap_close = document.querySelector('.sitemap_close'),
        body = document.querySelector('body');

    btn.addEventListener('click', function() {
        sitemap.classList.add('active');
        body.style.position = 'fixed';
    });
    sitemap_close.addEventListener('click', function() {
        sitemap.classList.remove('active');
        body.style.position = 'relative';
    });

    /* nav */
    var nav = document.querySelectorAll('.depth1 > li');

    for (var i = 0; i < nav.length; i++) {
        nav[i].addEventListener('mouseover', function() {
            this.classList.add('active');
        });
        nav[i].addEventListener('mouseout', function() {
            this.classList.remove('active');
        });
    }

    /* footer */
    var link = document.querySelector('.site'),
        activeclass = 'active';

    link.addEventListener('click', function(e) {
        e.preventDefault();
        var hasClass = link.classList.contains('active');
        if (!hasClass) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    /* top */
    $('#top').click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 500);
        $('body').removeClass('scroll');
        $('#header').removeClass('scroll');
    });

    /* top
    var top = document.getElementById('top');
    top.addEventListener('click', function() {
    });
*/

    /*
        var docElem = document.documentElement,
            scrollPos = docElem.scrollTop,
            top = document.getElementById('top');

        top.addEventListener('click', function(ev) {
            ev.preventDefault();
            scrollToTop();
        });
        console.log(top);

        function scrollToTop() {
            var scrollInterval = setInterval(function() {
                if (scrollPos != 0) {
                    window.scrollBy(0, -55);
                } else {
                    clearInterval(scrollInterval);
                }
            }, 15);
        }
        */
});

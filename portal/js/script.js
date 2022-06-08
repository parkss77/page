$(document).ready(function() {
    /*
        $(window).on('load', function() {
            $('html, body').animate({
                scrollTop: 0
            }, 600);
        });
*/

    if ($('#header .header_top').css('display') == 'none') {
        $(window).scroll(function() {
            if ($(this).scrollTop() > 60) {
                $('#header').addClass('scroll');
            } else {
                $('#header').removeClass('scroll');
            }
        });

        $('main').css('padding-top', '100px');
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
        $('main').css('padding-top', '230px');
    }

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

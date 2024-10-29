(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner(0);
    
    
    // Initiate the wowjs
    new WOW().init();



   // testimonial carousel
   $(".testimonial-carousel").owlCarousel({
    autoplay: true,
    items: 1,
    smartSpeed: 1500,
    dots: true,
    dotsData: true,
    loop: true,
    margin: 25,
    nav : true,
    navText : [
        '<i class="bi bi-arrow-left"></i>',
        '<i class="bi bi-arrow-right"></i>'
    ]
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 5,
        time: 2000
    });


   // Back to top button
   $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
        $('.back-to-top').fadeIn('slow');
    } else {
        $('.back-to-top').fadeOut('slow');
    }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


})(jQuery);

document.addEventListener('DOMContentLoaded', () => {
    const switcher = document.querySelector('.language-switcher');
    const switchHandle = document.querySelector('.switch');

    // 获取当前语言
    const currentLang = localStorage.getItem('preferredLanguage') || 'en';
    setSwitcherPosition(currentLang);

    // 监听点击事件
    switcher.addEventListener('click', () => {
        const newLang = currentLang === 'en' ? 'zh' : 'en';
        setLanguage(newLang);
    });

    function setLanguage(lang) {
        if (lang === 'en') {
            window.location.href = 'en-index.html';
        } else if (lang === 'zh') {
            window.location.href = 'cn-index.html';
        }
        localStorage.setItem('preferredLanguage', lang);
    }

    function setSwitcherPosition(lang) {
        if (lang === 'en') {
            switchHandle.style.transform = 'translateX(0)';
        } else if (lang === 'zh') {
            switchHandle.style.transform = 'translateX(30px)';
        }
    }
});


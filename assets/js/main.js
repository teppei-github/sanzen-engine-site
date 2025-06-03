'use strict';
{
    $(function () {
        // header__btn & menu
        $('.header__btn').on('click', function() {
            $('.nav').toggleClass('active');
        });

        // nav__btn
        $('.nav__btn, .nav__item a').on('click', function() {
            $('.nav').removeClass('active');
        });

        // slick
        $('.slider').slick({
            autoplay: true,       //自動再生
            autoplaySpeed: 2000,  //自動再生のスピード
            speed: 800,           //スライドするスピード
            dots: true,           //スライド下のドット
            arrows: true,         //左右の矢印
            infinite: true,       //永久にループさせる
        });
    });
}


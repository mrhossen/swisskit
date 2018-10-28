/**
   - Version:  V 1.1
   - Author:   @mrhossen
**/

$(document).ready(function () {

    // add extra class for scroll nav

    $(window).on('scroll', function () {
        if ($(window).scrollTop() > 0) {
            $('nav').addClass('scrolled');
        } else {
            $('nav').removeClass('scrolled');
        }
    });

    // add extra class for backtotop

    $(window).on('scroll', function () {
        if ($(window).scrollTop() > 300) {
            $('.bactotop').addClass('scrolled');
        } else {
            $('.bactotop').removeClass('scrolled');
        }
    });

    // Preloader

    $(document).ready(function () {
        //Preloader
        $(window).on("load", function () {
            preloaderFadeOutTime = 500;

            function hidePreloader() {
                var preloader = $('#sk_preloader');
                preloader.fadeOut(preloaderFadeOutTime);
            }
            hidePreloader();
        });
    });

    // add extra class for contact form label 

    $(".form-control").focus(function () {
        $(this).parent().addClass("focused");
    }).blur(function () {
        if ($(this).val() === '') {
            $(this).parent().removeClass("focused");
        }
    });


    // Animation init

    AOS.init({

    });

    // smoth scroll

    $("a[href^='#']").click(function (e) {
        e.preventDefault();

        var position = $($(this).attr("href")).offset().top;

        $("body, html").animate({
            scrollTop: position
        });
    });


});
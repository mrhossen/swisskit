/**
   - Name: Swisskit
   - Version:  V 1.2
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

// contact form

$('#submit-btn').click(function(event){
    event.preventDefault();
     $.ajax({
        dataType: 'JSON',
        url: '/sendmail.php',
        type: 'POST',
        data: $('#submitform').serialize(),
        beforeSend: function(xhr){
          $('#submit-btn').html('SENDING...');
        },
        success: function(response){
          if(response){
            console.log(response);
            if(response['signal'] == 'ok'){
             $('#msg').html('<div class="alert alert-success">'+ response['msg']  +'</div>');
              $('input, textarea').val(function() {
                 return this.defaultValue;
              });
              setTimeout(function(){
                $('#msg').fadeOut('slow');
            }, 3000);
            }
            else{
              $('#msg').html('<div class="alert alert-danger">'+ response['msg'] +'</div>');
            }
          }
        },
        error: function(){
          $('#msg').html('<div class="alert alert-danger">Errors occur. Please try again later.</div>');
        },
        complete: function(){
          $('#submit-btn').html('SEND MESSAGE');
        }
      });
  });


});
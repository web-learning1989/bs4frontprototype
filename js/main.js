 jQuery.noConflict();

 (function($) {
     // Your jQuery code here, using the $
     'use:strict';

     $(function() {
         $(document).ready(function() {

             //toggle navigation 
             var toggleNavigation = $("#toggleNav");
             toggleNavigation.click(function(e) {
                 e.preventDefault();
                 $('.header__nav-right').slideToggle()
                 $(this).toggleClass('is-active');
             })
              
             //sticky header
             var headerOffset = $('.header').offset().top,
                 headerHeight = $('.header').outerHeight();

             $(window).scroll(function() {
                 var scrollTop = $(this).scrollTop() - headerHeight;
                 if (scrollTop >= headerHeight) {
                     $('.header').addClass('is-sticky');
                 } else {
                     $('.header').removeClass('is-sticky');
                 }

             });

             // animated scroll Link

             var scrollLink = $('.scroll');
             console.log(scrollLink);
             scrollLink.click(function(e) {
                 e.preventDefault();
                 $('body,html').animate({
                     scrollTop: $(this.hash).offset().top
                 }, 'slow');
             });

             $(window).scroll(function() {
                 var scrollPos = $(this).scrollTop();
                 scrollLink.each(function() {
                     var scrollOffset = $(this.hash).offset().top;
                     console.log(scrollOffset);
                     if (scrollOffset <= scrollPos) {
                         $(this).parent().addClass('active');
                         $(this).parent().siblings().removeClass('active');
                     }
                 })

             });

             // $('a[href^="#"]').click(function() {
             //           var the_id = $(this).attr("href");
             //           if (the_id === '#') {
             //               return;
             //           }
             //           $('html, body').animate({
             //               scrollTop: $(the_id).offset().top
             //           }, 'slow');
             //           return false;
             //       });

             //play pause video

             // $(window).scroll(function() {
             //     if ($(window).scrollTop() > 0) {

             //         document.querySelector('#video').pause();
             //     } else {
             //         document.querySelector('#video').play();
             //     }
             // });

             // set full height

             var setFullHeight = function() {
                 var elemHeight = $('.js-background');
                 elemHeight.css({
                     height: $(window).innerHeight()
                 });
             }
             setFullHeight();
             $(window).resize(function() {
                 setFullHeight();
             });

             // swiper slider
             if ($(".hero-slider .swiper-slide").length) {
                 var imageContainer = new Swiper('.hero-slider__layer_with-copy .swiper-container', {
                     direction: 'horizontal',
                     centeredSlides: true,
                     speed: 2000,
                     autoplay: true,
                     spaceBetween: 0,
                     loop: true,
                     grabCursor: false,
                     slidesPerView: 1,
                     autoHeight: false,
                     simulateTouch: false
                 });
                 var textContainer = new Swiper('.hero-slider__layer_with-texts .swiper-container', {
                     direction: 'horizontal',
                     centeredSlides: true,
                     speed: 950 * 2,
                     autoplay: true,
                     loop: true,
                     slidesPerView: 1,
                     autoHeight: false,
                     simulateTouch: false
                 });
             }

         });

     });

 })(jQuery);
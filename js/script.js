$(document).ready(function(){

    // --------------main active menu-------------

    $('.main-menu > li > a').click(function(){

        $('.main-menu').find('li a').removeClass('active');

        $(this).addClass('active');

    })

    // ---------pre loader-----------------

    setTimeout(function(){

        $('.loader').fadeOut();

    },500);

    // -----------------scroll event--------------

    $(window).on('scroll',function(){

        x = $(Window).scrollTop();
        // console.log(x);

        if(x>=200){
             $('#scroll-top').css('opacity','1');
        }
        else{
             $('#scroll-top').css('opacity','0');
        }

   })

   $('#scroll-top').click(function(){

        $(window).scrollTop({top:0})

   });

//    -----------------review slider---------------

$('.owl-carousel').owlCarousel({
     // loop:true,
     margin:10,
     dots:false,
     nav:true,
     navText:['<i class="fa-solid fa-arrow-left"></i>','<i class="fa-solid fa-arrow-right"></i>'],
     responsive:{
         0:{
             items:1
         },
         600:{
             items:3
         },
         1000:{
             items:1
         }
     }
 })

     $('.review-slider').slick({
        prevArrow:true,
        prevArrow:'<i class="fa-solid fa-arrow-down down-arrow"></i>',
        nextArrow:'<i class="fa-solid fa-arrow-up up-arrow"></i>',
        vertical:true,
        slidesToShow:1,
        swipeToSlide:true
     });
});

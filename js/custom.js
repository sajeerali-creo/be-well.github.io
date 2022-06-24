$(window).scroll(function(){
    if ($(this).scrollTop() > 50) {
    $('.main-head').addClass('header-bg');
    } else {
    $('.main-head').removeClass('header-bg');
    }
});

$(function() {
    // Owl Carousel
    var owl = $(".owl-carousel");
    owl.owlCarousel({
      margin: 30,
      loop: true,
      nav: false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:2
            }
        }
    });
  });
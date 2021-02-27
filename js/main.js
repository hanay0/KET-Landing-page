// portfolio slider
$(document).ready(function () {
    $('.slides-wrapper').slick({
        centerMode: true,
        centerPadding: '232px',
        slidesToShow: 3,
        autoplaySpeed: 1500,
        autoplay: true,
        responsive: [
      {
          breakpoint: 768,
          settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
    });
});

// testimonials-slider [second slider]
$(document).ready(function () {
    $('.testimonials-wrapper').slick({
        dots: false,
        infinite: true,
        speed: 200,
        fade: true,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: true,
        prevArrow: '.arrow-left',
        nextArrow: '.arrow-right',
        cssEase: 'linear'
    });
});
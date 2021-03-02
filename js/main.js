// portfolio slider
$(document).ready(function () {
    $('.slides-wrapper').slick({
        centerMode: true,
        slidesToShow: 3,
        autoplaySpeed: 1500,
        autoplay: false,
        responsive: [
      {
          breakpoint: 768,
          settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 2
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
        autoplay: false,
        autoplaySpeed: 1500,
        arrows: true,
        prevArrow: '.arrow-left',
        nextArrow: '.arrow-right',
        cssEase: 'linear'
    });
});


// parallax in banner
$(".intro-banner").parallax({
    opacity: ".2"
  });
  
  $(".intro-banner h1").parallax({
    y: '-20%',
    scale: 1.3,
  });


  // vanilla JS
  // collapsed navbar menu
  const menuBtn = document.querySelector('.logo-wrapper .menu'),
        menuLinks = document.querySelector('.nav-links');

// adding event listener to that button
// menuBtn.addEventListener('click', function() {
//   menuLinks.classList.toggle('active-menu');
// });
  
// jQuery
$('.logo-wrapper .menu').click(function (e) { 
  e.preventDefault();
  // $('.nav-links').toggleClass('active-menu');
  $('.nav-links').slideToggle('active-menu');
  // $('.nav-links').fadeIn('slow');
});









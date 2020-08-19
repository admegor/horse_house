$(document).ready(function() {

    $('.services__slider').slick({
        arrows: true,
        slidesToShow: 3,        
        slidesToScroll: 1,
        infinite: false,
        responsive: [
                {
          breakpoint: 890,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 540,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
  ]
        
    });
});
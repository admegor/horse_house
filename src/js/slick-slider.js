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

    $('.horse__slider').slick({
      arrows: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: false,
      fade: true,
      cssEase: 'linear',
  });

    $('.gallery__slider').slick({
      centerMode: true,
      centerPadding: '60px',
      arrows: false,
      slidesToShow: 3,
      slidesToScroll: 1,
      variableWidth: true,
      adaptiveHeight: true
  });
});
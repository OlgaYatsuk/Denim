(function () {

  $('.header-menu__item').on('click', function () {
    $('.header-submenu').stop().slideToggle();
  });

  const options = {
    accessibility: false,
    appendArrows: $('.brands-slider-controls'),
    prevArrow: '<a href="#" class="arrow-link arrow-link--prev"><i class="icon-left-open-big prev"></i></a>',
    nextArrow: '<a href="#" class="arrow-link arrow-link--next"><i class="icon-right-open-big next"></i></a>',
    infinite: true,
    lazyLoad: 'progressive',
    pauseOnHover: true,
    // TODO: check for viewport (CSS class)
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    touchMove: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 860,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 560,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          // centralMode: true,
        }
      }
      ]
  };

  $('.brands-wrapper').slick(options);

}());

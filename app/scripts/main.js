(function () {

  $('.header-menu__item').on('click', function () {
    $('.header-submenu').stop().slideToggle();
  });

  const options = {
    // arrows: true,
    appendArrows: $('.brands-slider-controls'),
    prevArrow: '<a href="#" class="arrow-link arrow-link--prev"><i class="icon-left-open-big prev"></i></a>',
    nextArrow: '<a href="#" class="arrow-link arrow-link--next"><i class="icon-right-open-big next"></i></a>',
    // infinite: true,
    // lazyLoad: 'progressive',
    // pauseOnHover: true,
    // TODO: check for viewport (CSS class)
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,

  };

  // $('.js-brands-slider').slick(options);

}());

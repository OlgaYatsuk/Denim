


(function () {

  class Menu {
    constructor(sSelector) {
      this.menu = $(sSelector);
      this.createEvents()
    }

    toggleSubmenu(event) {
      $(event.currentTarget).children('.header-submenu').stop().toggle();
    }

    showSubmenu(event) {
      this.toggleSubmenu(event);
    }

    hideSubmenu(event) {
      this.toggleSubmenu(event);
    }

    createEvents(){
      this.menu.find('.header-menu__item')
        .mouseover(this.showSubmenu.bind(this))
        .mouseout(this.hideSubmenu.bind(this));
    }
  }

  const menu = new Menu('.header-menu');

  $('.country__link').on('click', function(e) {
    e.preventDefault();
    $('.country-submenu').stop().toggle();
  });

  $('.country-submenu').on('mouseleave', function(e) {
    e.preventDefault();
    $('.country-submenu').stop().toggle();
  });

  $('.lang__link').on('click', function(e) {
    e.preventDefault();
    $('.lang-submenu').stop().toggle();
  });

  $('.lang-submenu').on('mouseleave', function(e) {
    e.preventDefault();
    $('.lang-submenu').stop().toggle();
  });

  const options = {
    accessibility: false,
    appendArrows: $('.brands-slider-controls'),
    prevArrow: '<a href="#" class="arrow-link arrow-link--prev"><i class="icon-left-open-big prev"></i></a>',
    nextArrow: '<a href="#" class="arrow-link arrow-link--next"><i class="icon-right-open-big next"></i></a>',
    infinite: true,
    lazyLoad: 'progressive',
    pauseOnHover: true,
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

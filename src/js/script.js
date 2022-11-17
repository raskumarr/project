$(document).ready(function(){
  $('.sliders__inner').slick({
      speed: 1000,
      //adaptiveHeight: true,
      prevArrow: '<button type="button" class="slick-prev"><img src="icons/left_solid.png"></button>',
      nextArrow: '<button type="button" class="slick-next"><img src="icons/right-solid.png"></button>',
      responsive: [
        {
            breakpoint: 992,
            settings: {
              dots: true,
              arrows: false
            }   
        }
      ]
  });

  $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab-active)', function () {
      $(this)
        .addClass('catalog__tab-active').siblings().removeClass('catalog__tab-active')
        .closest('div.container').find('div.catalog__content').removeClass('catalog__content-active').eq($(this).index()).addClass('catalog__content-active');
  });


  function toggleSlide(item) {
      $(item).each(function (i) {
        $(this).on('click', function (e) {
            e.preventDefault();
            $('.catalog-item__content').eq(i).toggleClass('catalog-item__content-active');
            $('.catalog-item__list').eq(i).toggleClass('catalog-item__list-active');
        })
      });
  };

  toggleSlide('.catalog-item__link');
  toggleSlide('.catalog-item__back');

   //Modal

  $('[data-modal=promo]').on('click', function () {
      $('.overlay, #promo').fadeIn('fast');
  });
  $('.modal__close').on('click', function () {
      $('.overlay, #promo, #thanks, #order').fadeOut('fast');
  });

  $('.button-mini').each(function (i) {
      $(this).on('click', function () {
        $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
        $('.overlay, #order').fadeIn('fast');
      });
  });
});
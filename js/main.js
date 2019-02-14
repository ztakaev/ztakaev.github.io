$( document ).ready(function() {
  $('#mainSlider').slick({
      dots: true,
      arrows: false,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      fade: true,
      adaptiveHeight: true,
      autoplay: true,
      autoplaySpeed: 3000,
  });

  $('#popularSlider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: $('#popularLeft'),
    nextArrow: $('#popularRight'),
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });

  $('#newSlider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: $('#newLeft'),
    nextArrow: $('#newRight'),
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });

  $('#interestingSlider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: $('#interestingLeft'),
    nextArrow: $('#interestingRight'),
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });

  $('#doubleSlider').slick({
      dots: false,
      arrows: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      fade: true,

      prevArrow: $('#doubleLeft'),
      nextArrow: $('#doubleRight'),
  });

  $('.popup__close').click(function (e) {
		e.preventDefault();
		$('.popup').fadeOut();
  });
  
  $('.feedback__btn_request').click(function (e) {
		e.preventDefault();
		$('#request').fadeIn();
  });
  
  $(document).mouseup(function (e){ 
		var div = $(".popup__wrap"); 
		if (!div.is(e.target) 
		    && div.has(e.target).length === 0) { 
			$('.popup').fadeOut(); 
		}
	});

  $('.product__rating').starbox({
    average: 0.42,
    changeable: 'once',
    autoUpdateAverage: true,
    ghosting: true
  });

  $('.reviews__rating').starbox({
    average: 0.42,
    changeable: 'once',
    autoUpdateAverage: true,
    ghosting: true
  });

  //количество товаров
  $('#incr').click(function (e) {
		e.preventDefault();
		$('.quantity__val').val(+$('.quantity__val').val() + 1);
  });
  $('#decr').click(function (e) {
    e.preventDefault();
    if (+$('.quantity__val').val() > 1)
		  $('.quantity__val').val(+$('.quantity__val').val() - 1);
  });

  //превью товара
  $('.product__imgs .zoom').elevateZoom();

  $('.product__main-bg').click(function() {
    let thisEl = $(this);
    let mainEl = $('.product__main');
    let wrap = $('.product__main-img');

    $(mainEl[0]).removeClass('product__main');
    $(mainEl[0]).removeClass('zoom');

    $(mainEl[0]).remove();

  
    $(thisEl[0]).addClass('product__main');
    

    $( thisEl[0] ).clone().appendTo( wrap[0]); 
  
    $('.product__main-img .product__main').addClass('zoom');
    $('.product__imgs .zoom').elevateZoom();
  })

  $('.dropdown').on('click', '.dropdown-menu > .interesting__sort', function(e) {
    e.stopPropagation();
  });
  
});

$( document ).ready(function() {
  $('#sliderWork').slick({
    centerMode: true,
    centerPadding: '440px',
    slidesToShow: 3,
    arrows: true,
    prevArrow: $('.arrow__left'),
    nextArrow: $('.arrow__right'),
    responsive: [
      {
        breakpoint: 1750,
        settings: {
          arrows: false,
          centerPadding: '300px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 1600,
        settings: {
          centerPadding: '200px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 1350,
        settings: {
          centerPadding: '100px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 1050,
        settings: {
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 991,
        settings: {
          centerPadding: '250px',
          slidesToShow: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          centerPadding: '200px',
          slidesToShow: 1
        }
      },
      {
        breakpoint: 650,
        settings: {
          centerPadding: '120px',
          slidesToShow: 1
        }
      },
      {
        breakpoint: 520,
        settings: {
          centerMode: true,
          slidesToShow: 1,
          centerPadding: '70px',
        }
      },
      {
        breakpoint: 430,
        settings: {
          centerMode: false,
          slidesToShow: 1,
          centerPadding: false,
        }
      }
    ]
  });

  //popup
  let popups = $('.popup');

  $('.popup__close').click(function(){
    popups.fadeOut();
  });
  
  $('#landingBtn').click(function(e) {
    e.preventDefault();
    $('#landing').fadeIn();
  });
  $('#icoBtn').click(function(e) {
    e.preventDefault();
    $('#ico').fadeIn();
  });
  $('#storeBtn').click(function(e) {
    e.preventDefault();
    $('#store').fadeIn();
  });
  $('#contentBtn').click(function(e) {
    e.preventDefault();
    $('#content').fadeIn();
  });
  $('#digitalBtn').click(function(e) {
    e.preventDefault();
    $('#digital').fadeIn();
  });
  $('#stickersBtn').click(function(e) {
    e.preventDefault();
    $('#stickers').fadeIn();
  });
  $('#videoBtn').click(function(e) {
    e.preventDefault();
    $('#video').fadeIn();
  });
  $('#photoBtn').click(function(e) {
    e.preventDefault();
    $('#photo').fadeIn();
  });

  //$(".popup_video").modalVideo();

});


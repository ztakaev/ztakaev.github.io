$(document).ready(function () {
	$("#products").slick({
	  infinite: false,
	  dots: true,
	  arrows: false,
	  slidesToShow: 4,
	  slidesToScroll: 4,
	  autoplay: true,
  	  autoplaySpeed: 2000,
  	  responsive: [
	    {
	      breakpoint: 768,
	      settings: {
	        slidesToShow: 3,
	        slidesToScroll: 3,
	      }
	    },
	    {
	      breakpoint: 575,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 2,
	      }
	    },
      ]
	});
})
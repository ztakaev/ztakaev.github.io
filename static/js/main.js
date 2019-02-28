$(document).ready(function () {

	/* слайдер Рекомендованные товары */
	/*
	function recommendedSwitch() {
		let recItems = $('.recommended-list__item');
		let recItemsImg = $('.recommended-list__img');
		let count = recItems.length - 1;

		let recShowItems = $('.recommended-show__item');
		$(recShowItems).hide();
		$(recShowItems[count]).show();
		
		if($(window).width() > "575") {
		    $('.recommended-list__arrow').on('click', function () {
				if (count < 1) {
					count = recItems.length;
				}
				count--;
				recItems.each(function(index) {
				  	$(recItemsImg[index]).removeClass('recommended-list__item_act');
				  	$(recShowItems[index]).hide();
				});
				$(recItemsImg[count]).addClass('recommended-list__item_act');
				$(recShowItems[count]).show();
			});
		}
		else {
			recItems.each(function(index) {
			  	$(recItems[index]).append( $(recShowItems[index]) );
			});
			$(recItems).on('click', function (event) {
				recItems.each(function(index) {
				  	$(recItemsImg[index]).removeClass('recommended-list__item_act');
				  	$(recShowItems[index]).hide();
				});

				recItems.each(function(index) {
				  	$(this).find(".recommended-show__info").hide();
					$(this).find(".recommended-show__item").hide();
				});
					$(this).find(".recommended-list__img").addClass('recommended-list__item_act');
				
				$(this).find(".recommended-show__info").show();
				$(this).find(".recommended-show__item").show();
			});
		}
	}
	*/
	

	function recommendedSwitch() {
		let recItems = $('.recommended-list__item');
		let recItemsImg = $('.recommended-list__img');
		let count = recItems.length - 1;

		let recShowItems = $('.recommended-show__item');
		$(recShowItems).hide();
		$(recShowItems[count]).show();
		
		if($(window).width() > "575") {
		    $(recItems).on('click mouseenter', function (event) {
				let index = $(this).index();

		    	recShowItems.each(function(index) {
				  	$(recShowItems[index]).hide();
					$(recShowItems[index]).hide();
				});

		    	recItems.each(function(index) {
				  	$(recItemsImg[index]).removeClass('recommended-list__item_act');
				});
				$(this).find(".recommended-list__img").addClass('recommended-list__item_act');
				$(recShowItems[index]).show();
		    });	    
		}
		else {
			recItems.each(function(index) {
			  	$(recItems[index]).append( $(recShowItems[index]) );
			});
			$(recItems).on('click', function (event) {
				recItems.each(function(index) {
				  	$(recItemsImg[index]).removeClass('recommended-list__item_act');
				  	$(recShowItems[index]).hide();
				});

				recItems.each(function(index) {
				  	$(this).find(".recommended-show__info").hide();
					$(this).find(".recommended-show__item").hide();
				});
					$(this).find(".recommended-list__img").addClass('recommended-list__item_act');
				
				$(this).find(".recommended-show__info").show();
				$(this).find(".recommended-show__item").show();
			});
		}
	}

	recommendedSwitch();
})


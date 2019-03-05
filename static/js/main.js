$(document).ready(function() {

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

        if ($(window).width() > "575") {
            $(recItems).on('click mouseenter', function(event) {
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
        } else {
            recItems.each(function(index) {
                $(recItems[index]).append($(recShowItems[index]));
            });
            $(recItems).on('click', function(event) {
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



    $(function() {
        //обрабатываем клик по блоку с классом trigger
        $('.trigger__btn').on('click', function(e) {
            e.preventDefault();
            //получаем нужные нам данные
            var $this = $(this),

                //получаем всё блоки menu
                container = $this.closest('.menu'),
                //получаем li по которому кликнули
                item = $this.closest('.item'),
                //получаем все другие li
                items = container.find('.item'),
                //выбираем из li активный
                activeItem = items.filter('.active'),
                //выбираем из li по которому кликнули блок контен
                content = item.find('.content'),
                //выбираем у li с классом active блок контент
                activeContent = activeItem.find('.content');


            //если нет li с классом active по которому кликнули
            if (!item.hasClass('active')) {
                //убираем класс active
                items.removeClass('active');
                $('.trigger__btn').removeClass('trigger__btn_rot');
                //добавляем active кликнутому
                item.addClass('active');
                //у того у кого был active задаём ширину 0
                activeContent.animate({
                    'width': '0px'
                });
                $(this).addClass('trigger__btn_rot');
                //кликнутому 530   
                if($(window).width() < 575) {
                    content.animate({
                        'width': '140px'
                    });
                } else {
                    content.animate({
                        'width': '350px'
                    });
                }
                
                content.addClass("show-content");

                //иначе

            } else {
                item.removeClass('active');
                $(this).removeClass('trigger__btn_rot');
                content.removeClass('show-content');
                content.animate({
                    'width': '0px'
                });
            }		
        });

        // клик вне аккордеона
        $(document).on('click', function(e) {
            var $this = $(e.target);
            if (!$this.closest('.menu').length) {
                $('.content').animate({
                    'width': '0px'
                });
                $('.item').removeClass('active');
            }
        });
    });

    function showOrderWay() {
        ! function(i) {
            var o, n;
            i(".order__detailed-way").on("click", function() {
                o = i(this).parents(".accordion_item"),
                n = o.find(".way-info"),
                    o.hasClass("active_block") ? (o.removeClass("active_block"), $(this).removeClass('detailed-rot'),
                    n.slideUp(), $(this).html("Подробнее")) : (o.addClass("active_block"), n.stop(!0, !0).slideDown(),
                    o.siblings(".active_block").removeClass("active_block").children(
                    ".way-info").stop(!0, !0).slideUp(), $(this).html("Свернуть"), $(this).addClass('detailed-rot'))

            })
        }(jQuery);
    }

    function showOrderInfo() {
        ! function(i) {
            var o, n;
            i(".order__btn").on("click", function() {
                o = i(this).parents(".accordion_item"),
                n = o.find(".order-info"),
                    o.hasClass("active_block") ? (o.removeClass("active_block"),
                    n.slideUp(), $(this).html("Подробнее")) : (o.addClass("active_block"), n.stop(!0, !0).slideDown(),
                    o.siblings(".active_block").removeClass("active_block").children(
                    ".order-info").stop(!0, !0).slideUp(), $(this).html("Свернуть"))

            })
        }(jQuery);
    }

    showOrderWay();
    showOrderInfo();


    $.widget( 'app.selectmenu', $.ui.selectmenu, {
      _drawButton: function() {
        this._super();
        var selected = this.element
        .find( '[selected]' )
        .length,
            placeholder = this.options.placeholder;

        if (!selected && placeholder) {
          this.buttonItem.text(placeholder);
        }
      }
    });

    $('#filter-day').selectmenu({
        'placeholder': 'День'
    });

    $('#filter-month').selectmenu({
        'placeholder': 'Месяц'
    });

    $('#filter-year').selectmenu({
        'placeholder': 'Год'
    });

    $('#filter-city').selectmenu({
        'placeholder': 'Город'
    });

    $('#filter-district').selectmenu({
        'placeholder': 'Округ / район'
    });

    $('#filter-address-first').selectmenu({
        'placeholder': 'Введите основной адрес'
    });

    $('#filter-apartment-first').selectmenu({
        'placeholder': 'Номер'
    });
    
    $('#filter-address-sec').selectmenu({
        'placeholder': 'Введите альтернативный адрес'
    });

     $('#filter-apartment-sec').selectmenu({
        'placeholder': 'Номер'
    });

})
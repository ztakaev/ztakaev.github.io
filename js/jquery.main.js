$(document).ready(function(){
    /* инициализация функций */
    /* описание функций */
    initScrollFixedHeader();

    // initWindowBlock();




    //open menu
    var opener = $('.open-menu, .holder-nav');
    var menu = $('#nav');
    opener.on('click', function(e){
        menu.toggleClass('open');
        return false;
    });

    $('#nav a').click(function(){
        menu.removeClass('open');
        elementClick = $(this).attr("href");
        destination = $(elementClick).offset().top;
        $('html, body').stop().animate({
            scrollTop: $(elementClick).offset().top
        }, 1000);
        return false;
    });


    $('.btn-choice, .black-btn').click(function(){
        elementClick = $(this).attr("href");
        destination = $(elementClick).offset().top;
        $('html, body').stop().animate({
            scrollTop: $(elementClick).offset().top-$('#header').innerHeight()
        }, 1000);
        return false;
    });


    $('.promo-slider').slick({
        dots: true,
        arrows: false,
        fade:true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    adaptiveHeight: true
                }
            }
        ]
    });


    $('.slider-review').slick({
        dots: false,
        arrows: true,
        speed: 300,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });




    $('.list-models li').matchHeight();


    resolutions();
    init_and_resize();
    $(window).resize(function() {
        init_and_resize();
    });

    //плавный скролл
    $("a.scrollto").click(function() {
        var elementClick = $(this).attr("href")
        var destination = $(elementClick).offset().top;
        jQuery("html:not(:animated),body:not(:animated)").animate({
          scrollTop: destination
        }, 800);
        return false;
    });

});
/* подключение плагинов */






function initScrollFixedHeader(){
   var topbarnav = $("body");
   $(window).scroll(function(){
       if ( $(this).scrollTop() > $(".promo").innerHeight() / 2  ){
           topbarnav.addClass("fixed-header");
       } else if(topbarnav.hasClass("fixed-header")) {
           topbarnav.removeClass("fixed-header");
       }
   });

}


$(function() {
    $('#primary').on('click', 'input:radio', function() { //обрабатываем события радио кнопок
        var activeIndex = parseInt($(this).val());
        $('#secondary > div.open').removeClass('open');
        $('#secondary > div').eq(activeIndex).addClass('open');
    })
});


$(function(){

    $('.slider-product').slick({
        dots: false,
        arrows: true,
        vertical: true ,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    vertical: false,
                    slidesToShow: 1,
                    fade:true
                }
            }
        ]
    });
    $('.slider-product').slick('slickFilter', '.unique');

    // When the filter values are changed,
    // apply the filter to slick.
    $('form.filter .filter-list-radio input').on('change', function() {
        var filterClass = getFilterValue();
        // console.log(filterClass);
        $('.slider-product').slick('slickUnfilter');
        $('.slider-product').slick('slickFilter', filterClass);
        $('.slider-product').slick('slickGoTo', 0);        

    });


    $("#filter-reset").click(function (e) {
        e.preventDefault();
        //$(this).is(':checked')
        if ($(".filter-list-radio  input").is(':checked')) {
            let radio = $(".filter-list-radio  input");
            for (var i = 0; i < radio.length; i++) {
                $(radio[i])[0].checked = false;
            }

            var filterClass = getFilterValue();
            // console.log(filterClass);
            $('.slider-product').slick('slickUnfilter');
            $('.slider-product').slick('slickFilter', filterClass);
            $('.slider-product').slick('slickGoTo', 0);       
            
        }
    });

    /**
     * This just reads the inputs from the
     * selects and creates the filter.
     */
    function getFilterValue() {
        // Grab all the values from the filters.
        var specialTrigger = false;
        var values = $('.filter-list-radio').map(function() {
            // For each group, get the select values.
            var groupVal = $(this).find('input').map(function() {
                if(!$(this).hasClass('special')){
                    if($(this).is(':checked')){

                        return $(this).val();
                    }
                } else{
                    if($(this).is(':checked')){
                        if(!specialTrigger){
                            specialTrigger = '';
                        }
                        specialTrigger = specialTrigger + $(this).val();
                    }
                }
            }).get();
            // join the values together.
            // console.log(groupVal);
            if(groupVal.length == 0){
                return groupVal = ".unique";   
            }else if(groupVal.indexOf( '.cutlets' ) != -1 ){
                return groupVal = ".cutlets";
            }else if(groupVal.indexOf( '.salat' ) != -1 ){
                return groupVal = ".salat";            
            }else if(groupVal.indexOf( '.pancakes' ) != -1 ){
                return groupVal = ".pancakes"; 
            }else{
                return groupVal.join('');
            }            
        }).get();
        // Remove empty strings from the filter array.
        // and join together with a comma. this way you
        // can use multiple filters.
        if(!specialTrigger){
            return values.filter(function(n) {
                return n !== "";
            }).join('');
        } else {
            // console.log(specialTrigger)
            var arr = specialTrigger.split('.');
            arr.splice(0, 1);
            for(var i = 0; i < arr.length; i++){
                if($('.most-important-radio input:checked').val()){
                    arr[i] = arr[i] + $('.most-important-radio input:checked').val();
                } else {
                    arr[i] = arr[i] + '.unique';
                }
                arr[i] = '.' + arr[i];
            }
            return arr.join(',');
        }
    }

});



function resolutions(){
    $('body').append('<div class="resolutions630"></div>');
}
function init_and_resize(){
    if($('.resolutions630').is(':visible')){
        $('.holder-nav').append($('.tel-head'));
        $('.holder-nav').append($('.cal-back'));
    }
    if($('.resolutions630').is(':hidden')){
        $('.block-header').prepend($('.cal-back'));
        $('.block-header').prepend($('.tel-head'));
    }
}


// function initWindowBlock(){

//     $(".btn-window").click(function(){
//         $('.pop-up-window').addClass("active");
//         return false;
//     });
//     $(document).click(function(event) {
//         if ($(event.target).closest('.pop-up-window').length) return;
//         $('.pop-up-window').removeClass("active");
//     });

// }

var arr = ['bank'];

$(function() {
     $('.flatography-slider').slick({
        dots: true,
        loop: true,
        arrows: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        responsive: [
            {
                breakpoint: 424,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });

    $('.header-slider').slick({
        dots: true,
        loop: true,
    });

    $('.sales-slider').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        loop: true,
        responsive: [
            {
                breakpoint: 424,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]

    });
    $('.tech-slider').slick({
        adaptiveHeight: true,
        dots: true,
        loop: true,
        responsive: [
            {
                breakpoint: 424,
                settings: {
                    adaptiveHeight: false,
                    slidesToShow: 1,
                }
            }
        ]
    });

    $('.other-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        loop: true,
        responsive: [
            {
                breakpoint: 424,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    dots: false,
                }
            }
        ]
    });

    $('.architecture-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 2,
        dots: true,
        loop: true,
        responsive: [
            {
                breakpoint: 424,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    dots: false,
                }
            }
        ]
    });

    if(window.matchMedia('(max-width: 414px)').matches) {
        $('.owl-carousel_mobile').addClass('owl-carousel');

        $('.owl-carousel_mobile').slick({
            dots: true,
            loop: true,
        });
    }

    
    $('.header-slider_dots, .owl-nav').each(function() {
        $(this).wrapAll('<div class="header-slider-js">');
    });
        
    

    //маска other
    
    function wrap()  {
        $('.image-container').css('width', function(){
            var w = $('.image-other').width();
            return w;
        })
        $('.image-container').css('height', function() {
            var h = $('.image-other').height();
            return h;
        })
    };
    
    $('.image-other').hover(function() {
        wrap();
    });


    //mobile 
    
    $('.hidden-mobile_menu_selector').click(function() {
        
        
        if($('.hidden-mobile_menu_selector').hasClass('hidden-mobile_menu_selectorActive')) {
            $('.hidden-mobile_menu_selector').removeClass('hidden-mobile_menu_selectorActive');
            $('.map-filter').removeClass('show2');
            $('.map-filter').addClass('show1', 300, 'linear');
        } else {
            $('.hidden-mobile_menu_selector').addClass('hidden-mobile_menu_selectorActive');
            $('.map-filter').removeClass('show1');
            $('.map-filter').addClass('show2', 300, 'linear');
        }
    })
    
    
    $('.filter-item_icon').click(function() {
        
        if(window.matchMedia('(max-width: 414px)').matches) {
        
        $('.hidden-mobile_menu_selector').removeClass('hidden-mobile_menu_selectorActive');
        $('.map-filter').removeClass('show2');
        $('.map-filter').addClass('show1', 300, 'linear');
        }
    });

    //popup's
    
    $('.call').click(function() {
        $('.modal-overlay').css('display', 'block');
        $('.main-modal').removeClass('modal-close');
        $('.main-modal').addClass('modal-show');
        
        $("html,body").css("overflow","hidden");
        // $('body').css('position', 'fixed');
        
        centerP4();
    })
    
    $('.voen-ipoteca').click(function() {
        
        if(window.matchMedia('(max-width: 414px)').matches) {
            $('.mobile-popup4').css('display', 'block')
            $('.mobile-popup4').removeClass('show1');
            $('.mobile-popup4').addClass('show2', 300, 'linear');
        }  else {
            $('.modal-overlay').css('display', 'block');
            $('.ipoteca-popup').removeClass('modal-close');
            $('.ipoteca-popup').addClass('modal-show');
            $("html,body").css("overflow","hidden");
            //$('body').css('position', 'fixed');
            centerP();
        }
            
    });
    
    $('.mat-capital').click(function() {
        if(window.matchMedia('(max-width: 414px)').matches) {
            $('.mobile-popup3').css('display', 'block')
            $('.mobile-popup3').removeClass('show1');
            $('.mobile-popup3').addClass('show2', 300, 'linear');
        } else {
            $('.modal-overlay').css('display', 'block');
            $('.mat-capital-popup').removeClass('modal-close');
            $('.mat-capital-popup').addClass('modal-show');
            $("html,body").css("overflow","hidden");
            //$('body').css('position', 'fixed');
            centerP();
        }
        
    });
    
    $('.slides_content').click(function() {
        number = $(this).attr('data-number');

        $('.modal-overlay').css('display', 'block');
        $('#'+number).removeClass('modal-close1');
        $('#'+number).addClass('modal-show1');
        $("html,body").css("overflow","hidden");
        // $('body').css('position', 'fixed');
        centerP1();
    });
     
    function showTime2() {
        $('.modal-overlay').css('display', 'block');
        $('.offices-modal_hint').removeClass('modal-close');
        $('.offices-modal_hint').addClass('modal-show');
        $("html,body").css("overflow","hidden");
        $('body').css('position', 'fixed');
        centerP2();
    }
    
    
        if($('section').hasClass('offices-modal_hint')) {
            if($('.modal-overlay').css('display') !== 'block') {
                setTimeout(showTime2, 5000);
            } 
        }
    
    
    
    if($('.route-button').click()) {
        openMapInOffices();
    }
    
    function openMapInOffices() {
        $('.route-button').click(function() {        
            $('.modal-overlay').css('display', 'block');
            $('.offices-modal_map').removeClass('modal-close');
            $('.offices-modal_map').addClass('modal-show');

            $('.offices-modal_hint').removeClass('modal-show');
            $('.offices-modal_hint').addClass('modal-close');
            $("html,body").css("overflow","hidden");
            $('body').css('position', 'fixed');
        
            centerP3();
    })};
    
    
    $('.inner-item:first-of-type').click(function() {
        
         if(window.matchMedia('(max-width: 414px)').matches) {
            $('.mobile-popup1').css('display', 'block')
            $('.mobile-popup1').removeClass('show1');
            $('.mobile-popup1').addClass('show2', 300, 'linear');
             
        } else {
            $('.modal-overlay').css('display', 'block');
            $('.rass-popup_second').removeClass('modal-close');
            $('.rass-popup_second').addClass('modal-show');
            centerP();
            $("html,body").css("overflow","hidden");
            //$('body').css('position', 'fixed');
        }
    })
    
    $('.inner-item:nth-of-type(3)').click(function() {
        
         if(window.matchMedia('(max-width: 414px)').matches) {
            $('.mobile-popup2').css('display', 'block')
            $('.mobile-popup2').removeClass('show1');
            $('.mobile-popup2').addClass('show2', 300, 'linear');
        } else {
        
            $('.modal-overlay').css('display', 'block');
            $('.rass-popup_first').removeClass('modal-close');
            $('.rass-popup_first').addClass('modal-show');
            centerP();
            $("html,body").css("overflow","hidden");
            //$('body').css('position', 'fixed');
        }
    });
    
    
    //закрываем 
    //кнопкой
    
    $('.close-mobile_popup').click(function() {
        $('html, body').css('overflow', 'auto');
        $('body').css('position', 'relative');
        
        $('.mobile-popup1').removeClass('show2');
        $('.mobile-popup1').addClass('show1');  
        $('.mobile-popup1').css('display', 'none')
        $('.mobile-popup2').removeClass('show2');
        $('.mobile-popup2').addClass('show1');
        $('.mobile-popup2').css('display', 'none')
        $('.mobile-popup3').removeClass('show2');
        $('.mobile-popup3').addClass('show1');
        $('.mobile-popup3').css('display', 'none')
        $('.mobile-popup4').removeClass('show2');
        $('.mobile-popup4').addClass('show1');
        $('.mobile-popup4').css('display', 'none')
    })
    
    $('.close-popup').click(function() {
        $('html, body').css('overflow', 'auto');
        $('body').css('position', 'relative');
        
        $('.modal-overlay').css('display', 'none');
        
        $('.ipoteca-popup').removeClass('modal-show');
        $('.ipoteca-popup').addClass('modal-close');
        
        $('.mat-capital-popup').removeClass('modal-show');
        $('.mat-capital-popup').addClass('modal-close');
        
        $('.progress-slider_popup').removeClass('modal-show1');
        $('.progress-slider_popup').addClass('modal-close1');
        
        $('.offices-modal_hint').removeClass('modal-show');
        $('.offices-modal_hint').addClass('modal-close');
        
        $('.offices-modal_map').removeClass('modal-show');
        $('.offices-modal_map').addClass('modal-close');
        
        $('.main-modal').removeClass('modal-show');
        $('.main-modal').addClass('modal-close');
        
        $('.rass-popup_first').removeClass('modal-show');
        $('.rass-popup_first').addClass('modal-close');
        
        $('.rass-popup_second').removeClass('modal-show');
        $('.rass-popup_second').addClass('modal-close');
    })
    
    //фоном
    
    $('.modal-overlay').click(function() {
        $('html, body').css('overflow', 'auto');
        $('body').css('position', 'relative');
        
        $('.modal-overlay').css('display', 'none');
        
        $('.ipoteca-popup').removeClass('modal-show');
        $('.ipoteca-popup').addClass('modal-close');
        
        $('.mat-capital-popup').removeClass('modal-show');
        $('.mat-capital-popup').addClass('modal-close');
        
        $('.progress-slider_popup').removeClass('modal-show1');
        $('.progress-slider_popup').addClass('modal-close1');
        
        $('.offices-modal_hint').removeClass('modal-show');
        $('.offices-modal_hint').addClass('modal-close');
        
        $('.offices-modal_map').removeClass('modal-show');
        $('.offices-modal_map').addClass('modal-close');
        
        $('.main-modal').removeClass('modal-show');
        $('.main-modal').addClass('modal-close');
        
        $('.rass-popup_first').removeClass('modal-show');
        $('.rass-popup_first').addClass('modal-close');
     
        $('.rass-popup_second').removeClass('modal-show');
        $('.rass-popup_second').addClass('modal-close');
    })
    
    //esc
    
    window.addEventListener("keydown", function(evt) {
        if(evt.keyCode === 27) {
            evt.preventDefault();
            $('html, body').css('overflow', 'auto');
            $('body').css('position', 'relative');
            
            $('.modal-overlay').css('display', 'none');
                
                $('.ipoteca-popup').removeClass('modal-show');
                $('.ipoteca-popup').addClass('modal-close');
                
                $('.mat-capital-popup').removeClass('modal-show');
                $('.mat-capital-popup').addClass('modal-close');
                
                $('.progress-slider_popup').removeClass('modal-show1');
                $('.progress-slider_popup').addClass('modal-close1');
                
                $('.offices-modal_hint').removeClass('modal-show');
                $('.offices-modal_hint').addClass('modal-close');
                
                $('.offices-modal_map').removeClass('modal-show');
                $('.offices-modal_map').addClass('modal-close');
                
                $('.main-modal').removeClass('modal-show');
                $('.main-modal').addClass('modal-close');
                
                $('.rass-popup_first').removeClass('modal-show');
                $('.rass-popup_first').addClass('modal-close');
                
                $('.rass-popup_second').removeClass('modal-show');
                $('.rass-popup_second').addClass('modal-close');
        }   
    });
    
    //центровщик
    
    function centerP() {
        var y = $('body');
        var z = $('.popup-container');
        
        if(window.matchMedia('(max-width: 1024px)').matches) {
            var x = (y.width() - z.width()-17) / 4;
        } else {
            var x = (y.width() - z.width()-17) / 2.5;
        }
        
    
        z.css('left', x + 'px');
    }; 
    
    
    
    function centerP1() {
        var y1 = $(window).width();
        var z1 = $('.progress-slider_popup');
        var x1 = (y1 - z1.width() - 17) / 2;
        
        z1.css('left', x1 + 'px');
     }
    
    function centerP2() {
        var y2 = $(window).width();
        var z2 = $('.offices-modal_hint');
        
        
        var x2 = (y2 - z2.width() - 17) / 2;
        
        z2.css('left', x2 + 'px');
    }
    
    function centerP3() {
        var y3 = $(window).width();
        var z3 = $('.offices-modal_map');
        var x3 = (y3 - z3.width() - 17)/2
        
        z3.css('left', x3 + 'px');
    }
    
    function centerP4() {
        var y4 = $(window).width();
        var z4 = $('.main-modal');
        var x4 = (y4 - z4.width() - 27)/2;
        
        z4.css('left', x4 + 'px');
    }
    
    function centerP5() {
        var y5 = $(window).width();
        var z5 = $('.mat-capital-popup');
        
        if(window.matchMedia('(max-width: 1024px)').matches) {
            var x5 = (y5 - z5.width() - 17)/4;
        } else {
            var x5 = (y5 - z5.width() - 17)/2;
        }
        
        
        z5.css('left', x5 + 'px');
    };
});


$('.rooms').click(function() {
    if($(this).hasClass('active-button')) {
        $(this).removeClass('active-button');
    } else {
        $(this).addClass('active-button');
    }
})



//выделение сердца в избранном

$('.heart-cell').click(function() {
    $(this).addClass('active-favorite');
});


//переключение камер 

$('.camera-item').click(function() {
    $('.camera-item').removeClass('active-camera');
    $(this).addClass('active-camera');
})

//обертка для ссылки в таблицах

function wrapTable() {
    if($('.selector-table').hasClass('favorites-table')) {
        $('.first-row_tagline').css('width', function() {
            var w = $('.other-row').width();
            var wButton = $('.heart-cell').width();
            
            return w - wButton;
        }); 
        
        $('.first-row_tagline').css('height', function() {
            var h = $('.other-row').height();
            
            return h;
        })
    } else {
        $('.first-row_tagline').css('width', function() {
        var w = $('.other-row').width();
        return w;
    });
    
    $('.first-row_tagline').css('height', function() {
        var h = $('.other-row').height();
        return h;
    })
    } 
}

$('.other-row').hover(function() {
    wrapTable();
})


//jquery ui

//inputs

//стоимость

$(document).ready(function() {
    $("#slider").slider({
        min: 2,
        max: 30,
        step: 0.01,
        range: true,
        values: [2, 30],
        slide: function(event, ui) {
            for (var i = 0; i < ui.values.length; ++i) {
                $("input.sliderValue1[data-index=" + i + "]").attr('value', ui.values[i]);
            }
            formChange();
        }
    });

    $("input.sliderValue1").change(function() {
        var $this = $(this);
        $("#slider").slider("values", $this.data("index"), $this.val());
    });
});

//площадь

$(document).ready(function() {
    $('#slider1').slider({
        min: 30,
        max: 170,
        step: 1,
        range: true,
        values: [30,170],
        slide: function(event, ui) {
            for (var i = 0; i < ui.values.length; ++i) {
                $("input.sliderValue2[data-index=" + i + "]").attr('value', ui.values[i]);
            }
            formChange();
        }
    });


    $('input.sliderValue2').change(function() {
        var $this = $(this);
        $('#slider1').slider('values', $this.data('index'), $this.val());
    })
});

//этаж

$(document).ready(function() {
    $('#slider2').slider({
        min: 1,
        max: 14,
        step: 1,
        range: true,
        values: [1,14],
        slide: function(event, ui) {
            for (var i = 0; i < ui.values.length; ++i) {
                $("input.sliderValue3[data-index=" + i + "]").attr('value', ui.values[i]);
            }
            formChange();
        }
    });


    $('input.sliderValue3').change(function() {
        var $this = $(this);
        $('#slider2').slider('values', $this.data('index'), $this.val());
    })
});

//кухня

$(document).ready(function() {
    $('#slider3').slider({
        min: 0,
        max: 35,
        step: 0.1,
        range: true,
        values: [0,35],
        slide: function(event, ui) {
            for (var i = 0; i < ui.values.length; ++i) {
                $("input.sliderValue4[data-index=" + i + "]").attr('value', ui.values[i]);
            }
            formChange();
        }
    });


    $('input.sliderValue4').change(function() {
        var $this = $(this);
        $('#slider3').slider('values', $this.data('index'), $this.val());
    })
    
//select mobile
    
    //месяцы
    
    $(document).ready(function() {
        $('#month').selectmenu({
            width: '100%', 
        });
    })
    
    //камеры
    
    $(document).ready(function() {
        $('#camera').selectmenu({
            width: '100%',
        });
    })
    
    //города
    
    $(document).ready(function() {
        $('#city').selectmenu({
            width: '100%',
        })
    })
    
    //просмотр квартир - вид
    
    $('.view-button').click(function() {
        $('.view-button').removeClass('view-active');
        $(this).addClass('view-active');
        
        if($('.button-1').hasClass('view-active')) {
            $('.variant-1').removeClass('opacity0');
            $('.variant-1').addClass('opacity1', 1000, 'linear');
            
            $('.variant-2').removeClass('opacity1');
            $('.variant-2').addClass('opacity0', 1000, 'linear');
            
            $('.variant-3').removeClass('opacity1');
            $('.variant-3').addClass('opacity0', 1000, 'linear');
            
            $('.variant-4').removeClass('opacity1');
            $('.variant-4').addClass('opacity0', 1000, 'linear');
            
            console.log('2d');

        } else if($('.button-2').hasClass('view-active')) {
            $('.variant-2').removeClass('opacity0');
            $('.variant-2').addClass('opacity1', 1000, 'linear');
            
            $('.variant-1').removeClass('opacity1');
            $('.variant-1').addClass('opacity0', 1000, 'linear');
            
            $('.variant-3').removeClass('opacity1');
            $('.variant-3').addClass('opacity0', 1000, 'linear');
            
            $('.variant-4').removeClass('opacity1');
            $('.variant-4').addClass('opacity0', 1000, 'linear');
            
            console.log('3d');

        } else if($('.button-3').hasClass('view-active')) {
            $('.variant-3').removeClass('opacity0');
            $('.variant-3').addClass('opacity1', 1000, 'linear');
            
            $('.variant-1').removeClass('opacity1');
            $('.variant-1').addClass('opacity0', 1000, 'linear');
            
            $('.variant-2').removeClass('opacity1');
            $('.variant-2').addClass('opacity0', 1000, 'linear');
            
            $('.variant-4').removeClass('opacity1');
            $('.variant-4').addClass('opacity0', 1000, 'linear');
            
            console.log('3d-360')

        } else if($('.button-4').hasClass('view-active')) {
            $('.variant-4').removeClass('opacity0');
            $('.variant-4').addClass('opacity1', 1000, 'linear');
            
            $('.variant-1').removeClass('opacity1');
            $('.variant-1').addClass('opacity0', 1000, 'linear');
            
            $('.variant-2').removeClass('opacity1');
            $('.variant-2').addClass('opacity0', 1000, 'linear');
            
            $('.variant-3').removeClass('opacity1');
            $('.variant-3').addClass('opacity0', 1000, 'linear');
            
            console.log('этаж');
        }
    })
    
    //моб меню
    
    //show
    
    $('.mobile-burger').click(function() {
        $("html,body").css("overflow","hidden");
        $('.mobile-menu').css('display', 'flex');
        $('.mobile-menu').removeClass('close-mob_menu');
        $('.mobile-menu').addClass('show-mob_menu');
    });

    //close
    
    $('.menu-close').click(function() {
        $("html,body").css("overflow","auto");
        $('.mobile-menu').removeClass('show-mob_menu');
        $('.mobile-menu').addClass('close-mob_menu', 200, 'linear');
    })
    
    //gradient-opacity в oveflow элементах
    
    $('.buying-list').on('touchstart', function() {      
        $('.gradient-opacity').css('display','none!important');    
    })
    
    $('.buying-list').on('touchend', function() {
        $('.gradient-opacity').css('display','block!important');  
    });

    var fvt = $.cookie('favorite_flats');
    var fvtarr = fvt.split(',');
    var vftcnt = fvtarr.length;
    $('.mdi-cards-heart-ico').html(vftcnt-1);

});

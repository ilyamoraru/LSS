var arr = ['bank'];

$(function() {

    
    $('.owl-carousel').slick({
        dots: true,
        loop: true,
    });
    
    $('.flatography-slider').slick({
        dots: true,
        loop: true,
        arrows: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        // responsive: [
        //     {
        //         breakpoint: 424,
        //         settings: {
        //             slidesToShow: 1,
        //         }
        //     }
        // ]
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
    })
        
    

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
    })
    
    //фильтрация по запросам на карте
    
   
    $('.map-filter_item').click(function() {
        $('.map-filter_item').removeClass('activeMap');
        $(this).addClass('activeMap');
        arr[0] = $(this).attr('data-name');//получаем значение фильтра
        initMap();
        callback(results,status);
        createMarker(place);
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
    
    //открываем
    
    /*function showTime1() {
        $('.modal-overlay').css('display', 'block');
        $('.main-modal').removeClass('modal-close');
        $('.main-modal').addClass('modal-show');
        centerP4();
    }
    
    if($('section').hasClass('main-modal')) {
        setTimeout(showTime1, 2000);
    }*/
    
    $('.call').click(function() {
        $('.modal-overlay').css('display', 'block');
        $('.main-modal').removeClass('modal-close');
        $('.main-modal').addClass('modal-show');
        
        $("html,body").css("overflow","hidden");
        $('body').css('position', 'fixed');
        
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
        if($('section').hasClass('progress-slider_popup')) {
            $('.modal-overlay').css('display', 'block');
            $('.progress-slider_popup').removeClass('modal-close1');
            $('.progress-slider_popup').addClass('modal-show1');
            $("html,body").css("overflow","hidden");
            $('body').css('position', 'fixed');
            centerP1();
        }
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
    
//страница корпусов

//mouseenter

$('.corpus-mask').mouseenter(function() {
    var desc = $(this).find('.corpus-desc');
    var corpName = $(this).find('.corpus-name');
    var sectionName = $(this).find('.section-name');

    $(this).css('z-index','40');

    //подсвечиваем маску только на выборе корпусов

    var bg = $(this).attr('data-background');
    
    var url = 'url("' + bg + '")' ;
    console.log(url);
    $(this).css('background', url);
    $(this).css('background-repeat','no-repeat');

    //выводим описание корпуса/секции

    desc.removeClass('opacity0');
    desc.addClass('opacity1', 500, 'linear');
    desc.css('z-index','17');

    //плашки нумерации

    corpName.removeClass('opacity1');
    corpName.addClass('opacity0');

    sectionName.removeClass('opacity1');
    sectionName.addClass('opacity0');
});

//mouseleave

$('.corpus-mask').mouseleave(function() {
    var desc = $(this).find('.corpus-desc');
    var corpName = $(this).find('.corpus-name');
    var sectionName = $(this).find('.section-name');

    $(this).css('z-index','');

    $(this).css('background','none');

    desc.removeClass('opacity1');
    desc.addClass('opacity0');
    desc.css('z-index','-100');

    corpName.removeClass('opacity0');
    corpName.addClass('opacity1');

    sectionName.removeClass('opacity0');
    sectionName.addClass('opacity1');
});


$('.corpus1_mask, .corpus1-desc').click(function() {
    $('.corpus-paginator_item p').removeClass('active-corpus');
    $('.1').addClass('active-corpus');

    $('.index-change-wrap').css('display','none');
    $('.coprus1-change-wrap').css('display','block');
});


$('.corpus2_mask, .corpus2-desc').click(function() {
    $('.corpus-paginator_item p').removeClass('active-corpus');
    $('.2').addClass('active-corpus');

    $('.index-change-wrap').css('display','none');
    $('.corpus2-change-wrap').css('display','block');
});

//для 3 корпуса


$('.corpus3_mask, .corpus3-desc').click(function() {
    $('.corpus-paginator_item p').removeClass('active-corpus');
    $('.3').addClass('active-corpus');

    $('.index-change-wrap').css('display','none');
    $('.corpus3-change-wrap').css('display','block');
});

//для 4 корпуса

$('.corpus4_mask, .corpus4-desc').click(function() {
    $('.corpus-paginator_item p').removeClass('active-corpus');
    $('.4').addClass('active-corpus');

    $('.index-change-wrap').css('display','none');
    $('.corpus4-change-wrap').css('display','block');
});

$('.corpuses').click(function() {
    if($(this).hasClass('active-button')) {
        $(this).removeClass('active-button');
    } else {
        $(this).addClass('active-button');
    }
});

$('.rooms').click(function() {
    if($(this).hasClass('active-button')) {
        $(this).removeClass('active-button');
    } else {
        $(this).addClass('active-button');
    }
});


// button на страницу корпусов

$('.back-to-corp').click(function() {
    $('.corpus-paginator_item-active').removeClass('corpus-paginator_item-active');

    $('.index-change-wrap').css('display','block');
    $('.coprus1-change-wrap').css('display','none');
    $('.corpus2-change-wrap').css('display','none');
    $('.corpus3-change-wrap').css('display','none');
    $('.corpus4-change-wrap').css('display','none');
    $('.corpus-btn').css('display','none');

    $('.corpus1-paginator').css('display','none');
    $('.corpus2-paginator').css('display','none');
    $('.corpus3-paginator').css('display','none');
    $('.corpus4-paginator').css('display','none');

    $('.corpus-main').css('display', 'flex');
});

//подсветка корпусов/секций по клику на список снизу

    $('.corpus-paginator_item').click(function () {
        $('.corpus-paginator_item').removeClass('corpus-paginator_item-active');
        $(this).addClass('corpus-paginator_item-active');

        var className = $(this).find('p').attr('class');

        var parent = $(this).parent();

        var maskList = $('.corpus1-masks .corpus-mask');

        // var dataAttr = maskList.each(function() {
        //     a = [];
        //     a = $(this).attr('data-sec');
        // });
        //
        // console.log(a);

        if (window.matchMedia("(max-width: 440px)").matches) {

            if (parent.hasClass('corpus-selector')) {

                if (className == 1) {

                    $('.corpus-2-btn').css('display','none');
                    $('.corpus-3-btn').css('display','none');
                    $('.corpus-4-btn').css('display','none');
                    $('.corpus-1-btn').css('display','flex');

                    var mask2 = $('.corpus2_mask');
                    var mask3 = $('.corpus3_mask');
                    var mask4 = $('.corpus4_mask');

                    var mask = $('.corpus1_mask');
                    var desc = mask.find('.corpus-desc');
                    var corpName = mask.find('.corpus-name');
                    var sectionName = mask.find('.section-name');

                    mask2.css('z-index', '-100');
                    mask3.css('z-index', '-100');
                    mask4.css('z-index', '-100');

                    mask.css('z-index', '40');

                    //подсвечиваем маску только на выборе корпусов

                    var bg = mask.attr('data-background');
                    var url = 'url("' + bg;
                    mask.css('background', url);
                    mask.css('background-repeat', 'no-repeat');

                    //выводим описание корпуса/секции

                    desc.removeClass('opacity0');
                    desc.addClass('opacity1', 500, 'linear');
                    desc.css('z-index', '17');
                    desc.css('display', 'flex');

                    //плашки нумерации

                    corpName.removeClass('opacity1');
                    corpName.addClass('opacity0');

                    sectionName.removeClass('opacity1');
                    sectionName.addClass('opacity0');
                } else if (className == 2) {
                    $('.corpus-1-btn').css('display','none');
                    $('.corpus-3-btn').css('display','none');
                    $('.corpus-4-btn').css('display','none');
                    $('.corpus-2-btn').css('display','flex');

                    var mask1 = $('.corpus1_mask');
                    var mask3 = $('.corpus3_mask');
                    var mask4 = $('.corpus4_mask');

                    var mask = $('.corpus2_mask');
                    var desc = mask.find('.corpus-desc');
                    var corpName = mask.find('.corpus-name');
                    var sectionName = mask.find('.section-name');

                    mask1.css('z-index', '-100');
                    mask3.css('z-index', '-100');
                    mask4.css('z-index', '-100');

                    mask.css('z-index', '40');

                    //подсвечиваем маску только на выборе корпусов

                    var bg = mask.attr('data-background');
                    var url = 'url("' + bg;
                    mask.css('background', url);
                    mask.css('background-repeat', 'no-repeat');

                    //выводим описание корпуса/секции

                    desc.removeClass('opacity0');
                    desc.addClass('opacity1', 500, 'linear');
                    desc.css('z-index', '17');
                    desc.css('display', 'flex');

                    //плашки нумерации

                    corpName.removeClass('opacity1');
                    corpName.addClass('opacity0');

                    sectionName.removeClass('opacity1');
                    sectionName.addClass('opacity0');
                } else if (className == 3) {
                    $('.corpus-1-btn').css('display','none');
                    $('.corpus-2-btn').css('display','none');
                    $('.corpus-4-btn').css('display','none');
                    $('.corpus-3-btn').css('display','flex');

                    var mask1 = $('.corpus1_mask');
                    var mask2 = $('.corpus2_mask');
                    var mask4 = $('.corpus4_mask');

                    var mask = $('.corpus3_mask');
                    var desc = mask.find('.corpus-desc');
                    var corpName = mask.find('.corpus-name');
                    var sectionName = mask.find('.section-name');

                    mask1.css('z-index', '-100');
                    mask2.css('z-index', '-100');
                    mask4.css('z-index', '-100');

                    mask.css('z-index', '40');

                    //подсвечиваем маску только на выборе корпусов

                    var bg = mask.attr('data-background');
                    var url = 'url("' + bg;
                    mask.css('background', url);
                    mask.css('background-repeat', 'no-repeat');

                    //выводим описание корпуса/секции

                    desc.removeClass('opacity0');
                    desc.addClass('opacity1', 500, 'linear');
                    desc.css('z-index', '17');
                    desc.css('display', 'flex');

                    //плашки нумерации

                    corpName.removeClass('opacity1');
                    corpName.addClass('opacity0');

                    sectionName.removeClass('opacity1');
                    sectionName.addClass('opacity0');
                } else if (className == 4) {
                    $('.corpus-1-btn').css('display','none');
                    $('.corpus-2-btn').css('display','none');
                    $('.corpus-3-btn').css('display','none');
                    $('.corpus-4-btn').css('display','flex');

                    var mask1 = $('.corpus1_mask');
                    var mask2 = $('.corpus2_mask');
                    var mask3 = $('.corpus3_mask');

                    var mask = $('.corpus4_mask');
                    var desc = mask.find('.corpus-desc');
                    var corpName = mask.find('.corpus-name');
                    var sectionName = mask.find('.section-name');

                    mask2.css('z-index', '-100');
                    mask3.css('z-index', '-100');
                    mask1.css('z-index', '-100');

                    mask.css('z-index', '40');

                    //подсвечиваем маску только на выборе корпусов

                    var bg = mask.attr('data-background');
                    var url = 'url("' + bg;
                    mask.css('background', url);
                    mask.css('background-repeat', 'no-repeat');

                    //выводим описание корпуса/секции

                    desc.removeClass('opacity0');
                    desc.addClass('opacity1', 500, 'linear');
                    desc.css('z-index', '17');
                    desc.css('display', 'flex');

                    //плашки нумерации

                    corpName.removeClass('opacity1');
                    corpName.addClass('opacity0');

                    sectionName.removeClass('opacity1');
                    sectionName.addClass('opacity0');
                }
            }

            if(parent.hasClass('corpus1-selector')) {
                var href = $(this).attr('data-href');
                $('.go-coprus1-btn').attr('href',href);

                if (className == 1) {
                    var mask2 = $('.section1_2-mask');
                    var mask3 = $('.section1_3-mask');
                    var mask4 = $('.section1_4-mask');
                    var mask5 = $('.section1_5-mask');
                    var mask6 = $('.section1_6-mask');
                    var mask7 = $('.section1_7-mask');
                    var mask8 = $('.section1_8-mask');
                    var mask9 = $('.section1_9-mask');
                    var mask10 = $('.section1_10-mask');
                    var mask11 = $('.section1_11-mask');
                    var mask12 = $('.section1_12-mask');
                    var mask13 = $('.section1_13-mask');

                    var mask = $('.section1_1-mask');

                    mask2.css('background', '');
                    mask3.css('background', '');
                    mask4.css('background', '');
                    mask5.css('background', '');
                    mask6.css('background', '');
                    mask7.css('background', '');
                    mask8.css('background', '');
                    mask9.css('background', '');
                    mask10.css('background', '');
                    mask11.css('background', '');
                    mask12.css('background', '');
                    mask13.css('background', '');

                    mask.css('z-index', '40');

                    //подсвечиваем маску только на выборе корпусов

                    var bg = mask.attr('data-background');
                    var url = 'url("' + bg;
                    mask.css('background', url);
                    mask.css('background-repeat', 'no-repeat');
                }
                if (className == 2) {
                    var mask1 = $('.section1_1-mask');
                    var mask3 = $('.section1_3-mask');
                    var mask4 = $('.section1_4-mask');
                    var mask5 = $('.section1_5-mask');
                    var mask6 = $('.section1_6-mask');
                    var mask7 = $('.section1_7-mask');
                    var mask8 = $('.section1_8-mask');
                    var mask9 = $('.section1_9-mask');
                    var mask10 = $('.section1_10-mask');
                    var mask11 = $('.section1_11-mask');
                    var mask12 = $('.section1_12-mask');
                    var mask13 = $('.section1_13-mask');

                    var mask = $('.section1_2-mask');

                    mask1.css('background', '');
                    mask3.css('background', '');
                    mask4.css('background', '');
                    mask5.css('background', '');
                    mask6.css('background', '');
                    mask7.css('background', '');
                    mask8.css('background', '');
                    mask9.css('background', '');
                    mask10.css('background', '');
                    mask11.css('background', '');
                    mask12.css('background', '');
                    mask13.css('background', '');

                    mask.css('z-index', '40');

                    //подсвечиваем маску только на выборе корпусов

                    var bg = mask.attr('data-background');
                    var url = 'url("' + bg;
                    mask.css('background', url);
                    mask.css('background-repeat', 'no-repeat');
                }

                if (className == 3) {
                    var mask1 = $('.section1_1-mask');
                    var mask2 = $('.section1_2-mask');
                    var mask4 = $('.section1_4-mask');
                    var mask5 = $('.section1_5-mask');
                    var mask6 = $('.section1_6-mask');
                    var mask7 = $('.section1_7-mask');
                    var mask8 = $('.section1_8-mask');
                    var mask9 = $('.section1_9-mask');
                    var mask10 = $('.section1_10-mask');
                    var mask11 = $('.section1_11-mask');
                    var mask12 = $('.section1_12-mask');
                    var mask13 = $('.section1_13-mask');

                    var mask = $('.section1_3-mask');

                    mask1.css('background', '');
                    mask2.css('background', '');
                    mask4.css('background', '');
                    mask5.css('background', '');
                    mask6.css('background', '');
                    mask7.css('background', '');
                    mask8.css('background', '');
                    mask9.css('background', '');
                    mask10.css('background', '');
                    mask11.css('background', '');
                    mask12.css('background', '');
                    mask13.css('background', '');

                    mask.css('z-index', '40');

                    //подсвечиваем маску только на выборе корпусов

                    var bg = mask.attr('data-background');
                    var url = 'url("' + bg;
                    mask.css('background', url);
                    mask.css('background-repeat', 'no-repeat');
                }

                if (className == 4) {
                    var mask1 = $('.section1_1-mask');
                    var mask2 = $('.section1_2-mask');
                    var mask3 = $('.section1_3-mask');
                    var mask5 = $('.section1_5-mask');
                    var mask6 = $('.section1_6-mask');
                    var mask7 = $('.section1_7-mask');
                    var mask8 = $('.section1_8-mask');
                    var mask9 = $('.section1_9-mask');
                    var mask10 = $('.section1_10-mask');
                    var mask11 = $('.section1_11-mask');
                    var mask12 = $('.section1_12-mask');
                    var mask13 = $('.section1_13-mask');

                    var mask = $('.section1_4-mask');

                    mask1.css('background', '');
                    mask2.css('background', '');
                    mask3.css('background', '');
                    mask5.css('background', '');
                    mask6.css('background', '');
                    mask7.css('background', '');
                    mask8.css('background', '');
                    mask9.css('background', '');
                    mask10.css('background', '');
                    mask11.css('background', '');
                    mask12.css('background', '');
                    mask13.css('background', '');

                    mask.css('z-index', '40');

                    //подсвечиваем маску только на выборе корпусов

                    var bg = mask.attr('data-background');
                    var url = 'url("' + bg;
                    mask.css('background', url);
                    mask.css('background-repeat', 'no-repeat');
                }

                if (className == 5) {
                    var mask1 = $('.section1_1-mask');
                    var mask2 = $('.section1_2-mask');
                    var mask3 = $('.section1_3-mask');
                    var mask4 = $('.section1_4-mask');
                    var mask6 = $('.section1_6-mask');
                    var mask7 = $('.section1_7-mask');
                    var mask8 = $('.section1_8-mask');
                    var mask9 = $('.section1_9-mask');
                    var mask10 = $('.section1_10-mask');
                    var mask11 = $('.section1_11-mask');
                    var mask12 = $('.section1_12-mask');
                    var mask13 = $('.section1_13-mask');

                    var mask = $('.section1_5-mask');

                    mask1.css('background', '');
                    mask2.css('background', '');
                    mask3.css('background', '');
                    mask4.css('background', '');
                    mask6.css('background', '');
                    mask7.css('background', '');
                    mask8.css('background', '');
                    mask9.css('background', '');
                    mask10.css('background', '');
                    mask11.css('background', '');
                    mask12.css('background', '');
                    mask13.css('background', '');

                    mask.css('z-index', '40');

                    //подсвечиваем маску только на выборе корпусов

                    var bg = mask.attr('data-background');
                    var url = 'url("' + bg;
                    mask.css('background', url);
                    mask.css('background-repeat', 'no-repeat');
                }

                if (className == 6) {
                    var mask1 = $('.section1_1-mask');
                    var mask2 = $('.section1_2-mask');
                    var mask3 = $('.section1_3-mask');
                    var mask5 = $('.section1_5-mask');
                    var mask4 = $('.section1_4-mask');
                    var mask7 = $('.section1_7-mask');
                    var mask8 = $('.section1_8-mask');
                    var mask9 = $('.section1_9-mask');
                    var mask10 = $('.section1_10-mask');
                    var mask11 = $('.section1_11-mask');
                    var mask12 = $('.section1_12-mask');
                    var mask13 = $('.section1_13-mask');

                    var mask = $('.section1_6-mask');

                    mask1.css('background', '');
                    mask2.css('background', '');
                    mask3.css('background', '');
                    mask5.css('background', '');
                    mask4.css('background', '');
                    mask7.css('background', '');
                    mask8.css('background', '');
                    mask9.css('background', '');
                    mask10.css('background', '');
                    mask11.css('background', '');
                    mask12.css('background', '');
                    mask13.css('background', '');

                    mask.css('z-index', '40');

                    //подсвечиваем маску только на выборе корпусов

                    var bg = mask.attr('data-background');
                    var url = 'url("' + bg;
                    mask.css('background', url);
                    mask.css('background-repeat', 'no-repeat');
                }

                if (className == 7) {
                    var mask1 = $('.section1_1-mask');
                    var mask2 = $('.section1_2-mask');
                    var mask3 = $('.section1_3-mask');
                    var mask5 = $('.section1_5-mask');
                    var mask4 = $('.section1_4-mask');
                    var mask6 = $('.section1_6-mask');
                    var mask8 = $('.section1_8-mask');
                    var mask9 = $('.section1_9-mask');
                    var mask10 = $('.section1_10-mask');
                    var mask11 = $('.section1_11-mask');
                    var mask12 = $('.section1_12-mask');
                    var mask13 = $('.section1_13-mask');

                    var mask = $('.section1_7-mask');

                    mask1.css('background', '');
                    mask2.css('background', '');
                    mask3.css('background', '');
                    mask5.css('background', '');
                    mask4.css('background', '');
                    mask6.css('background', '');
                    mask8.css('background', '');
                    mask9.css('background', '');
                    mask10.css('background', '');
                    mask11.css('background', '');
                    mask12.css('background', '');
                    mask13.css('background', '');

                    mask.css('z-index', '40');

                    //подсвечиваем маску только на выборе корпусов

                    var bg = mask.attr('data-background');
                    var url = 'url("' + bg;
                    mask.css('background', url);
                    mask.css('background-repeat', 'no-repeat');
                }

                if (className == 8) {
                    var mask1 = $('.section1_1-mask');
                    var mask2 = $('.section1_2-mask');
                    var mask3 = $('.section1_3-mask');
                    var mask5 = $('.section1_5-mask');
                    var mask4 = $('.section1_4-mask');
                    var mask6 = $('.section1_6-mask');
                    var mask7 = $('.section1_7-mask');
                    var mask9 = $('.section1_9-mask');
                    var mask10 = $('.section1_10-mask');
                    var mask11 = $('.section1_11-mask');
                    var mask12 = $('.section1_12-mask');
                    var mask13 = $('.section1_13-mask');

                    var mask = $('.section1_8-mask');

                    mask1.css('background', '');
                    mask2.css('background', '');
                    mask3.css('background', '');
                    mask5.css('background', '');
                    mask4.css('background', '');
                    mask6.css('background', '');
                    mask7.css('background', '');
                    mask9.css('background', '');
                    mask10.css('background', '');
                    mask11.css('background', '');
                    mask12.css('background', '');
                    mask13.css('background', '');

                    mask.css('z-index', '40');

                    //подсвечиваем маску только на выборе корпусов

                    var bg = mask.attr('data-background');
                    var url = 'url("' + bg;
                    mask.css('background', url);
                    mask.css('background-repeat', 'no-repeat');
                }

                if (className == 9) {
                    var mask1 = $('.section1_1-mask');
                    var mask2 = $('.section1_2-mask');
                    var mask3 = $('.section1_3-mask');
                    var mask5 = $('.section1_5-mask');
                    var mask4 = $('.section1_4-mask');
                    var mask6 = $('.section1_6-mask');
                    var mask7 = $('.section1_7-mask');
                    var mask8 = $('.section1_8-mask');
                    var mask10 = $('.section1_10-mask');
                    var mask11 = $('.section1_11-mask');
                    var mask12 = $('.section1_12-mask');
                    var mask13 = $('.section1_13-mask');

                    var mask = $('.section1_9-mask');

                    mask1.css('background', '');
                    mask2.css('background', '');
                    mask3.css('background', '');
                    mask5.css('background', '');
                    mask4.css('background', '');
                    mask6.css('background', '');
                    mask7.css('background', '');
                    mask8.css('background', '');
                    mask10.css('background', '');
                    mask11.css('background', '');
                    mask12.css('background', '');
                    mask13.css('background', '');

                    mask.css('z-index', '40');

                    //подсвечиваем маску только на выборе корпусов

                    var bg = mask.attr('data-background');
                    var url = 'url("' + bg;
                    mask.css('background', url);
                    mask.css('background-repeat', 'no-repeat');
                }

                if (className == 10) {
                    var mask1 = $('.section1_1-mask');
                    var mask2 = $('.section1_2-mask');
                    var mask3 = $('.section1_3-mask');
                    var mask5 = $('.section1_5-mask');
                    var mask4 = $('.section1_4-mask');
                    var mask6 = $('.section1_6-mask');
                    var mask7 = $('.section1_7-mask');
                    var mask8 = $('.section1_8-mask');
                    var mask9 = $('.section1_9-mask');
                    var mask11 = $('.section1_11-mask');
                    var mask12 = $('.section1_12-mask');
                    var mask13 = $('.section1_13-mask');

                    var mask = $('.section1_10-mask');

                    mask1.css('background', '');
                    mask2.css('background', '');
                    mask3.css('background', '');
                    mask5.css('background', '');
                    mask4.css('background', '');
                    mask6.css('background', '');
                    mask7.css('background', '');
                    mask8.css('background', '');
                    mask9.css('background', '');
                    mask11.css('background', '');
                    mask12.css('background', '');
                    mask13.css('background', '');

                    mask.css('z-index', '40');

                    //подсвечиваем маску только на выборе корпусов

                    var bg = mask.attr('data-background');
                    var url = 'url("' + bg;
                    mask.css('background', url);
                    mask.css('background-repeat', 'no-repeat');
                }

                if (className == 11) {
                    var mask1 = $('.section1_1-mask');
                    var mask2 = $('.section1_2-mask');
                    var mask3 = $('.section1_3-mask');
                    var mask5 = $('.section1_5-mask');
                    var mask4 = $('.section1_4-mask');
                    var mask6 = $('.section1_6-mask');
                    var mask7 = $('.section1_7-mask');
                    var mask8 = $('.section1_8-mask');
                    var mask9 = $('.section1_9-mask');
                    var mask10 = $('.section1_10-mask');
                    var mask12 = $('.section1_12-mask');
                    var mask13 = $('.section1_13-mask');

                    var mask = $('.section1_11-mask');

                    mask1.css('background', '');
                    mask2.css('background', '');
                    mask3.css('background', '');
                    mask5.css('background', '');
                    mask4.css('background', '');
                    mask6.css('background', '');
                    mask7.css('background', '');
                    mask8.css('background', '');
                    mask9.css('background', '');
                    mask10.css('background', '');
                    mask12.css('background', '');
                    mask13.css('background', '');

                    mask.css('z-index', '40');

                    //подсвечиваем маску только на выборе корпусов

                    var bg = mask.attr('data-background');
                    var url = 'url("' + bg;
                    mask.css('background', url);
                    mask.css('background-repeat', 'no-repeat');
                }

                if (className == 12) {
                    var mask1 = $('.section1_1-mask');
                    var mask2 = $('.section1_2-mask');
                    var mask3 = $('.section1_3-mask');
                    var mask5 = $('.section1_5-mask');
                    var mask4 = $('.section1_4-mask');
                    var mask6 = $('.section1_6-mask');
                    var mask7 = $('.section1_7-mask');
                    var mask8 = $('.section1_8-mask');
                    var mask9 = $('.section1_9-mask');
                    var mask10 = $('.section1_10-mask');
                    var mask11 = $('.section1_11-mask');
                    var mask13 = $('.section1_13-mask');

                    var mask = $('.section1_12-mask');

                    mask1.css('background', '');
                    mask2.css('background', '');
                    mask3.css('background', '');
                    mask5.css('background', '');
                    mask4.css('background', '');
                    mask6.css('background', '');
                    mask7.css('background', '');
                    mask8.css('background', '');
                    mask9.css('background', '');
                    mask10.css('background', '');
                    mask11.css('background', '');
                    mask13.css('background', '');

                    mask.css('z-index', '40');

                    //подсвечиваем маску только на выборе корпусов

                    var bg = mask.attr('data-background');
                    var url = 'url("' + bg;
                    mask.css('background', url);
                    mask.css('background-repeat', 'no-repeat');
                }

                if (className == 13) {
                    var mask1 = $('.section1_1-mask');
                    var mask2 = $('.section1_2-mask');
                    var mask3 = $('.section1_3-mask');
                    var mask5 = $('.section1_5-mask');
                    var mask4 = $('.section1_4-mask');
                    var mask6 = $('.section1_6-mask');
                    var mask7 = $('.section1_7-mask');
                    var mask8 = $('.section1_8-mask');
                    var mask9 = $('.section1_9-mask');
                    var mask10 = $('.section1_10-mask');
                    var mask11 = $('.section1_11-mask');
                    var mask12 = $('.section1_12-mask');

                    var mask = $('.section1_13-mask');

                    mask1.css('background', '');
                    mask2.css('background', '');
                    mask3.css('background', '');
                    mask5.css('background', '');
                    mask4.css('background', '');
                    mask6.css('background', '');
                    mask7.css('background', '');
                    mask8.css('background', '');
                    mask9.css('background', '');
                    mask10.css('background', '');
                    mask11.css('background', '');
                    mask12.css('background', '');

                    mask.css('z-index', '40');

                    //подсвечиваем маску только на выборе корпусов

                    var bg = mask.attr('data-background');
                    var url = 'url("' + bg;
                    mask.css('background', url);
                    mask.css('background-repeat', 'no-repeat');
                }
            }

            if(parent.hasClass('corpus2-selector')) {
                var href = $(this).attr('data-href');
                $('.go-coprus2-btn').attr('href',href);

                if (className == 1) {
                    var mask2 = $('.section2_2-mask');
                    var mask3 = $('.section2_3-mask');
                    var mask4 = $('.section2_4-mask');
                    var mask5 = $('.section2_5-mask');
                    var mask6 = $('.section2_6-mask');
                    var mask7 = $('.section2_7-mask');
                    var mask8 = $('.section2_8-mask');
                    var mask9 = $('.section2_9-mask');
                    var mask10 = $('.section2_10-mask');
                    var mask11 = $('.section2_11-mask');
                    var mask12 = $('.section2_12-mask');
                    var mask13 = $('.section2_13-mask');

                    var mask = $('.section2_1-mask');

                    mask2.css('background', '');
                    mask3.css('background', '');
                    mask4.css('background', '');
                    mask5.css('background', '');
                    mask6.css('background', '');
                    mask7.css('background', '');
                    mask8.css('background', '');
                    mask9.css('background', '');
                    mask10.css('background', '');
                    mask11.css('background', '');
                    mask12.css('background', '');
                    mask13.css('background', '');

                    mask.css('z-index', '40');

                    //подсвечиваем маску только на выборе корпусов

                    var bg = mask.attr('data-background');
                    var url = 'url("' + bg;
                    mask.css('background', url);
                    mask.css('background-repeat', 'no-repeat');
                }
                if (className == 2) {
                    var mask1 = $('.section2_1-mask');
                    var mask3 = $('.section2_3-mask');
                    var mask4 = $('.section2_4-mask');
                    var mask5 = $('.section2_5-mask');
                    var mask6 = $('.section2_6-mask');
                    var mask7 = $('.section2_7-mask');
                    var mask8 = $('.section2_8-mask');
                    var mask9 = $('.section2_9-mask');
                    var mask10 = $('.section2_10-mask');
                    var mask11 = $('.section2_11-mask');
                    var mask12 = $('.section2_12-mask');
                    var mask13 = $('.section2_13-mask');

                    var mask = $('.section2_2-mask');

                    mask1.css('background', '');
                    mask3.css('background', '');
                    mask4.css('background', '');
                    mask5.css('background', '');
                    mask6.css('background', '');
                    mask7.css('background', '');
                    mask8.css('background', '');
                    mask9.css('background', '');
                    mask10.css('background', '');
                    mask11.css('background', '');
                    mask12.css('background', '');
                    mask13.css('background', '');

                    mask.css('z-index', '40');

                    //подсвечиваем маску только на выборе корпусов

                    var bg = mask.attr('data-background');
                    var url = 'url("' + bg;
                    mask.css('background', url);
                    mask.css('background-repeat', 'no-repeat');
                }

                if (className == 3) {
                    var mask1 = $('.section2_1-mask');
                    var mask2 = $('.section2_2-mask');
                    var mask4 = $('.section2_4-mask');
                    var mask5 = $('.section2_5-mask');
                    var mask6 = $('.section2_6-mask');
                    var mask7 = $('.section2_7-mask');
                    var mask8 = $('.section2_8-mask');
                    var mask9 = $('.section2_9-mask');
                    var mask10 = $('.section2_10-mask');
                    var mask11 = $('.section2_11-mask');
                    var mask12 = $('.section2_12-mask');
                    var mask13 = $('.section2_13-mask');

                    var mask = $('.section2_3-mask');

                    mask1.css('background', '');
                    mask2.css('background', '');
                    mask4.css('background', '');
                    mask5.css('background', '');
                    mask6.css('background', '');
                    mask7.css('background', '');
                    mask8.css('background', '');
                    mask9.css('background', '');
                    mask10.css('background', '');
                    mask11.css('background', '');
                    mask12.css('background', '');
                    mask13.css('background', '');

                    mask.css('z-index', '40');

                    //подсвечиваем маску только на выборе корпусов

                    var bg = mask.attr('data-background');
                    var url = 'url("' + bg;
                    mask.css('background', url);
                    mask.css('background-repeat', 'no-repeat');
                }

                if (className == 4) {
                    var mask1 = $('.section2_1-mask');
                    var mask2 = $('.section2_2-mask');
                    var mask3 = $('.section2_3-mask');
                    var mask5 = $('.section2_5-mask');
                    var mask6 = $('.section2_6-mask');
                    var mask7 = $('.section2_7-mask');
                    var mask8 = $('.section2_8-mask');
                    var mask9 = $('.section2_9-mask');
                    var mask10 = $('.section2_10-mask');
                    var mask11 = $('.section2_11-mask');
                    var mask12 = $('.section2_12-mask');
                    var mask13 = $('.section2_13-mask');

                    var mask = $('.section2_4-mask');

                    mask1.css('background', '');
                    mask2.css('background', '');
                    mask3.css('background', '');
                    mask5.css('background', '');
                    mask6.css('background', '');
                    mask7.css('background', '');
                    mask8.css('background', '');
                    mask9.css('background', '');
                    mask10.css('background', '');
                    mask11.css('background', '');
                    mask12.css('background', '');
                    mask13.css('background', '');

                    mask.css('z-index', '40');

                    //подсвечиваем маску только на выборе корпусов

                    var bg = mask.attr('data-background');
                    var url = 'url("' + bg;
                    mask.css('background', url);
                    mask.css('background-repeat', 'no-repeat');
                }

                if (className == 5) {
                    var mask1 = $('.section2_1-mask');
                    var mask2 = $('.section2_2-mask');
                    var mask3 = $('.section2_3-mask');
                    var mask4 = $('.section2_4-mask');
                    var mask6 = $('.section2_6-mask');
                    var mask7 = $('.section2_7-mask');
                    var mask8 = $('.section2_8-mask');
                    var mask9 = $('.section2_9-mask');
                    var mask10 = $('.section2_10-mask');
                    var mask11 = $('.section2_11-mask');
                    var mask12 = $('.section2_12-mask');
                    var mask13 = $('.section2_13-mask');

                    var mask = $('.section2_5-mask');

                    mask1.css('background', '');
                    mask2.css('background', '');
                    mask3.css('background', '');
                    mask4.css('background', '');
                    mask6.css('background', '');
                    mask7.css('background', '');
                    mask8.css('background', '');
                    mask9.css('background', '');
                    mask10.css('background', '');
                    mask11.css('background', '');
                    mask12.css('background', '');
                    mask13.css('background', '');

                    mask.css('z-index', '40');

                    //подсвечиваем маску только на выборе корпусов

                    var bg = mask.attr('data-background');
                    var url = 'url("' + bg;
                    mask.css('background', url);
                    mask.css('background-repeat', 'no-repeat');
                }

                if (className == 6) {
                    var mask1 = $('.section2_1-mask');
                    var mask2 = $('.section2_2-mask');
                    var mask3 = $('.section2_3-mask');
                    var mask5 = $('.section2_5-mask');
                    var mask4 = $('.section2_4-mask');
                    var mask7 = $('.section2_7-mask');
                    var mask8 = $('.section2_8-mask');
                    var mask9 = $('.section2_9-mask');
                    var mask10 = $('.section2_10-mask');
                    var mask11 = $('.section2_11-mask');
                    var mask12 = $('.section2_12-mask');
                    var mask13 = $('.section2_13-mask');

                    var mask = $('.section2_6-mask');

                    mask1.css('background', '');
                    mask2.css('background', '');
                    mask3.css('background', '');
                    mask5.css('background', '');
                    mask4.css('background', '');
                    mask7.css('background', '');
                    mask8.css('background', '');
                    mask9.css('background', '');
                    mask10.css('background', '');
                    mask11.css('background', '');
                    mask12.css('background', '');
                    mask13.css('background', '');

                    mask.css('z-index', '40');

                    //подсвечиваем маску только на выборе корпусов

                    var bg = mask.attr('data-background');
                    var url = 'url("' + bg;
                    mask.css('background', url);
                    mask.css('background-repeat', 'no-repeat');
                }

                if (className == 7) {
                    var mask1 = $('.section2_1-mask');
                    var mask2 = $('.section2_2-mask');
                    var mask3 = $('.section2_3-mask');
                    var mask5 = $('.section2_5-mask');
                    var mask4 = $('.section2_4-mask');
                    var mask6 = $('.section2_6-mask');
                    var mask8 = $('.section2_8-mask');
                    var mask9 = $('.section2_9-mask');
                    var mask10 = $('.section2_10-mask');
                    var mask11 = $('.section2_11-mask');
                    var mask12 = $('.section2_12-mask');
                    var mask13 = $('.section2_13-mask');

                    var mask = $('.section2_7-mask');

                    mask1.css('background', '');
                    mask2.css('background', '');
                    mask3.css('background', '');
                    mask5.css('background', '');
                    mask4.css('background', '');
                    mask6.css('background', '');
                    mask8.css('background', '');
                    mask9.css('background', '');
                    mask10.css('background', '');
                    mask11.css('background', '');
                    mask12.css('background', '');
                    mask13.css('background', '');

                    mask.css('z-index', '40');

                    //подсвечиваем маску только на выборе корпусов

                    var bg = mask.attr('data-background');
                    var url = 'url("' + bg;
                    mask.css('background', url);
                    mask.css('background-repeat', 'no-repeat');
                }

                if (className == 8) {
                    var mask1 = $('.section2_1-mask');
                    var mask2 = $('.section2_2-mask');
                    var mask3 = $('.section2_3-mask');
                    var mask5 = $('.section2_5-mask');
                    var mask4 = $('.section2_4-mask');
                    var mask6 = $('.section2_6-mask');
                    var mask7 = $('.section2_7-mask');
                    var mask9 = $('.section2_9-mask');
                    var mask10 = $('.section2_10-mask');
                    var mask11 = $('.section2_11-mask');
                    var mask12 = $('.section2_12-mask');
                    var mask13 = $('.section2_13-mask');

                    var mask = $('.section2_8-mask');

                    mask1.css('background', '');
                    mask2.css('background', '');
                    mask3.css('background', '');
                    mask5.css('background', '');
                    mask4.css('background', '');
                    mask6.css('background', '');
                    mask7.css('background', '');
                    mask9.css('background', '');
                    mask10.css('background', '');
                    mask11.css('background', '');
                    mask12.css('background', '');
                    mask13.css('background', '');

                    mask.css('z-index', '40');

                    //подсвечиваем маску только на выборе корпусов

                    var bg = mask.attr('data-background');
                    var url = 'url("' + bg;
                    mask.css('background', url);
                    mask.css('background-repeat', 'no-repeat');
                }

                if (className == 9) {
                    var mask1 = $('.section2_1-mask');
                    var mask2 = $('.section2_2-mask');
                    var mask3 = $('.section2_3-mask');
                    var mask5 = $('.section2_5-mask');
                    var mask4 = $('.section2_4-mask');
                    var mask6 = $('.section2_6-mask');
                    var mask7 = $('.section2_7-mask');
                    var mask8 = $('.section2_8-mask');
                    var mask10 = $('.section2_10-mask');
                    var mask11 = $('.section2_11-mask');
                    var mask12 = $('.section2_12-mask');
                    var mask13 = $('.section2_13-mask');

                    var mask = $('.section2_9-mask');

                    mask1.css('background', '');
                    mask2.css('background', '');
                    mask3.css('background', '');
                    mask5.css('background', '');
                    mask4.css('background', '');
                    mask6.css('background', '');
                    mask7.css('background', '');
                    mask8.css('background', '');
                    mask10.css('background', '');
                    mask11.css('background', '');
                    mask12.css('background', '');
                    mask13.css('background', '');

                    mask.css('z-index', '40');

                    //подсвечиваем маску только на выборе корпусов

                    var bg = mask.attr('data-background');
                    var url = 'url("' + bg;
                    mask.css('background', url);
                    mask.css('background-repeat', 'no-repeat');
                }

                if (className == 10) {
                    var mask1 = $('.section2_1-mask');
                    var mask2 = $('.section2_2-mask');
                    var mask3 = $('.section2_3-mask');
                    var mask5 = $('.section2_5-mask');
                    var mask4 = $('.section2_4-mask');
                    var mask6 = $('.section2_6-mask');
                    var mask7 = $('.section2_7-mask');
                    var mask8 = $('.section2_8-mask');
                    var mask9 = $('.section2_9-mask');
                    var mask11 = $('.section2_11-mask');
                    var mask12 = $('.section2_12-mask');
                    var mask13 = $('.section2_13-mask');

                    var mask = $('.section2_10-mask');

                    mask1.css('background', '');
                    mask2.css('background', '');
                    mask3.css('background', '');
                    mask5.css('background', '');
                    mask4.css('background', '');
                    mask6.css('background', '');
                    mask7.css('background', '');
                    mask8.css('background', '');
                    mask9.css('background', '');
                    mask11.css('background', '');
                    mask12.css('background', '');
                    mask13.css('background', '');

                    mask.css('z-index', '40');

                    //подсвечиваем маску только на выборе корпусов

                    var bg = mask.attr('data-background');
                    var url = 'url("' + bg;
                    mask.css('background', url);
                    mask.css('background-repeat', 'no-repeat');
                }

                if (className == 11) {
                    var mask1 = $('.section2_1-mask');
                    var mask2 = $('.section2_2-mask');
                    var mask3 = $('.section2_3-mask');
                    var mask5 = $('.section2_5-mask');
                    var mask4 = $('.section2_4-mask');
                    var mask6 = $('.section2_6-mask');
                    var mask7 = $('.section2_7-mask');
                    var mask8 = $('.section2_8-mask');
                    var mask9 = $('.section2_9-mask');
                    var mask10 = $('.section2_10-mask');
                    var mask12 = $('.section2_12-mask');
                    var mask13 = $('.section2_13-mask');

                    var mask = $('.section2_11-mask');

                    mask1.css('background', '');
                    mask2.css('background', '');
                    mask3.css('background', '');
                    mask5.css('background', '');
                    mask4.css('background', '');
                    mask6.css('background', '');
                    mask7.css('background', '');
                    mask8.css('background', '');
                    mask9.css('background', '');
                    mask10.css('background', '');
                    mask12.css('background', '');
                    mask13.css('background', '');

                    mask.css('z-index', '40');

                    //подсвечиваем маску только на выборе корпусов

                    var bg = mask.attr('data-background');
                    var url = 'url("' + bg;
                    mask.css('background', url);
                    mask.css('background-repeat', 'no-repeat');
                }

                if (className == 12) {
                    var mask1 = $('.section2_1-mask');
                    var mask2 = $('.section2_2-mask');
                    var mask3 = $('.section2_3-mask');
                    var mask5 = $('.section2_5-mask');
                    var mask4 = $('.section2_4-mask');
                    var mask6 = $('.section2_6-mask');
                    var mask7 = $('.section2_7-mask');
                    var mask8 = $('.section2_8-mask');
                    var mask9 = $('.section2_9-mask');
                    var mask10 = $('.section2_10-mask');
                    var mask11 = $('.section2_11-mask');
                    var mask13 = $('.section2_13-mask');

                    var mask = $('.section2_12-mask');

                    mask1.css('background', '');
                    mask2.css('background', '');
                    mask3.css('background', '');
                    mask5.css('background', '');
                    mask4.css('background', '');
                    mask6.css('background', '');
                    mask7.css('background', '');
                    mask8.css('background', '');
                    mask9.css('background', '');
                    mask10.css('background', '');
                    mask11.css('background', '');
                    mask13.css('background', '');

                    mask.css('z-index', '40');

                    //подсвечиваем маску только на выборе корпусов

                    var bg = mask.attr('data-background');
                    var url = 'url("' + bg;
                    mask.css('background', url);
                    mask.css('background-repeat', 'no-repeat');
                }

                if (className == 13) {
                    var mask1 = $('.section2_1-mask');
                    var mask2 = $('.section2_2-mask');
                    var mask3 = $('.section2_3-mask');
                    var mask5 = $('.section2_5-mask');
                    var mask4 = $('.section2_4-mask');
                    var mask6 = $('.section2_6-mask');
                    var mask7 = $('.section2_7-mask');
                    var mask8 = $('.section2_8-mask');
                    var mask9 = $('.section2_9-mask');
                    var mask10 = $('.section2_10-mask');
                    var mask11 = $('.section2_11-mask');
                    var mask12 = $('.section2_12-mask');

                    var mask = $('.section2_13-mask');

                    mask1.css('background', '');
                    mask2.css('background', '');
                    mask3.css('background', '');
                    mask5.css('background', '');
                    mask4.css('background', '');
                    mask6.css('background', '');
                    mask7.css('background', '');
                    mask8.css('background', '');
                    mask9.css('background', '');
                    mask10.css('background', '');
                    mask11.css('background', '');
                    mask12.css('background', '');

                    mask.css('z-index', '40');

                    //подсвечиваем маску только на выборе корпусов

                    var bg = mask.attr('data-background');
                    var url = 'url("' + bg;
                    mask.css('background', url);
                    mask.css('background-repeat', 'no-repeat');
                }
            }

            if(parent.hasClass('corpus3-selector')) {
                var href = $(this).attr('data-href');
                $('.go-coprus3-btn').attr('href',href);

                if (className == 1) {
                    var mask2 = $('.section3_2-mask');
                    var mask3 = $('.section3_3-mask');
                    var mask4 = $('.section3_4-mask');
                    var mask5 = $('.section3_5-mask');
                    var mask6 = $('.section3_6-mask');
                    var mask7 = $('.section3_7-mask');
                    var mask8 = $('.section3_8-mask');
                    var mask9 = $('.section3_9-mask');
                    var mask10 = $('.section3_10-mask');
                    var mask11 = $('.section3_11-mask');


                    var mask = $('.section3_1-mask');

                    mask2.css('background', '');
                    mask3.css('background', '');
                    mask4.css('background', '');
                    mask5.css('background', '');
                    mask6.css('background', '');
                    mask7.css('background', '');
                    mask8.css('background', '');
                    mask9.css('background', '');
                    mask10.css('background', '');
                    mask11.css('background', '');

                    mask.css('z-index', '40');

                    //подсвечиваем маску только на выборе корпусов

                    var bg = mask.attr('data-background');
                    var url = 'url("' + bg;
                    mask.css('background', url);
                    mask.css('background-repeat', 'no-repeat');
                }
                if (className == 2) {
                    var mask1 = $('.section3_1-mask');
                    var mask3 = $('.section3_3-mask');
                    var mask4 = $('.section3_4-mask');
                    var mask5 = $('.section3_5-mask');
                    var mask6 = $('.section3_6-mask');
                    var mask7 = $('.section3_7-mask');
                    var mask8 = $('.section3_8-mask');
                    var mask9 = $('.section3_9-mask');
                    var mask10 = $('.section3_10-mask');
                    var mask11 = $('.section3_11-mask');

                    var mask = $('.section3_2-mask');

                    mask1.css('background', '');
                    mask3.css('background', '');
                    mask4.css('background', '');
                    mask5.css('background', '');
                    mask6.css('background', '');
                    mask7.css('background', '');
                    mask8.css('background', '');
                    mask9.css('background', '');
                    mask10.css('background', '');
                    mask11.css('background', '');


                    mask.css('z-index', '40');

                    //подсвечиваем маску только на выборе корпусов

                    var bg = mask.attr('data-background');
                    var url = 'url("' + bg;
                    mask.css('background', url);
                    mask.css('background-repeat', 'no-repeat');
                }

                if (className == 3) {
                    var mask1 = $('.section3_1-mask');
                    var mask2 = $('.section3_2-mask');
                    var mask4 = $('.section3_4-mask');
                    var mask5 = $('.section3_5-mask');
                    var mask6 = $('.section3_6-mask');
                    var mask7 = $('.section3_7-mask');
                    var mask8 = $('.section3_8-mask');
                    var mask9 = $('.section3_9-mask');
                    var mask10 = $('.section3_10-mask');
                    var mask11 = $('.section3_11-mask');


                    var mask = $('.section3_3-mask');

                    mask1.css('background', '');
                    mask2.css('background', '');
                    mask4.css('background', '');
                    mask5.css('background', '');
                    mask6.css('background', '');
                    mask7.css('background', '');
                    mask8.css('background', '');
                    mask9.css('background', '');
                    mask10.css('background', '');
                    mask11.css('background', '');


                    mask.css('z-index', '40');

                    //подсвечиваем маску только на выборе корпусов

                    var bg = mask.attr('data-background');
                    var url = 'url("' + bg;
                    mask.css('background', url);
                    mask.css('background-repeat', 'no-repeat');
                }

                if (className == 4) {
                    var mask1 = $('.section3_1-mask');
                    var mask2 = $('.section3_2-mask');
                    var mask3 = $('.section3_3-mask');
                    var mask5 = $('.section3_5-mask');
                    var mask6 = $('.section3_6-mask');
                    var mask7 = $('.section3_7-mask');
                    var mask8 = $('.section3_8-mask');
                    var mask9 = $('.section3_9-mask');
                    var mask10 = $('.section3_10-mask');
                    var mask11 = $('.section3_11-mask');

                    var mask = $('.section3_4-mask');

                    mask1.css('background', '');
                    mask2.css('background', '');
                    mask3.css('background', '');
                    mask5.css('background', '');
                    mask6.css('background', '');
                    mask7.css('background', '');
                    mask8.css('background', '');
                    mask9.css('background', '');
                    mask10.css('background', '');
                    mask11.css('background', '');

                    mask.css('z-index', '40');

                    //подсвечиваем маску только на выборе корпусов

                    var bg = mask.attr('data-background');
                    var url = 'url("' + bg;
                    mask.css('background', url);
                    mask.css('background-repeat', 'no-repeat');
                }

                if (className == 5) {
                    var mask1 = $('.section3_1-mask');
                    var mask2 = $('.section3_2-mask');
                    var mask3 = $('.section3_3-mask');
                    var mask4 = $('.section3_4-mask');
                    var mask6 = $('.section3_6-mask');
                    var mask7 = $('.section3_7-mask');
                    var mask8 = $('.section3_8-mask');
                    var mask9 = $('.section3_9-mask');
                    var mask10 = $('.section3_10-mask');
                    var mask11 = $('.section3_11-mask');

                    var mask = $('.section3_5-mask');

                    mask1.css('background', '');
                    mask2.css('background', '');
                    mask3.css('background', '');
                    mask4.css('background', '');
                    mask6.css('background', '');
                    mask7.css('background', '');
                    mask8.css('background', '');
                    mask9.css('background', '');
                    mask10.css('background', '');
                    mask11.css('background', '');


                    mask.css('z-index', '40');

                    //подсвечиваем маску только на выборе корпусов

                    var bg = mask.attr('data-background');
                    var url = 'url("' + bg;
                    mask.css('background', url);
                    mask.css('background-repeat', 'no-repeat');
                }

                if (className == 6) {
                    var mask1 = $('.section3_1-mask');
                    var mask2 = $('.section3_2-mask');
                    var mask3 = $('.section3_3-mask');
                    var mask5 = $('.section3_5-mask');
                    var mask4 = $('.section3_4-mask');
                    var mask7 = $('.section3_7-mask');
                    var mask8 = $('.section3_8-mask');
                    var mask9 = $('.section3_9-mask');
                    var mask10 = $('.section3_10-mask');
                    var mask11 = $('.section3_11-mask');

                    var mask = $('.section3_6-mask');

                    mask1.css('background', '');
                    mask2.css('background', '');
                    mask3.css('background', '');
                    mask5.css('background', '');
                    mask4.css('background', '');
                    mask7.css('background', '');
                    mask8.css('background', '');
                    mask9.css('background', '');
                    mask10.css('background', '');
                    mask11.css('background', '');

                    mask.css('z-index', '40');

                    //подсвечиваем маску только на выборе корпусов

                    var bg = mask.attr('data-background');
                    var url = 'url("' + bg;
                    mask.css('background', url);
                    mask.css('background-repeat', 'no-repeat');
                }

                if (className == 7) {
                    var mask1 = $('.section3_1-mask');
                    var mask2 = $('.section3_2-mask');
                    var mask3 = $('.section3_3-mask');
                    var mask5 = $('.section3_5-mask');
                    var mask4 = $('.section3_4-mask');
                    var mask6 = $('.section3_6-mask');
                    var mask8 = $('.section3_8-mask');
                    var mask9 = $('.section3_9-mask');
                    var mask10 = $('.section3_10-mask');
                    var mask11 = $('.section3_11-mask');

                    var mask = $('.section3_7-mask');

                    mask1.css('background', '');
                    mask2.css('background', '');
                    mask3.css('background', '');
                    mask5.css('background', '');
                    mask4.css('background', '');
                    mask6.css('background', '');
                    mask8.css('background', '');
                    mask9.css('background', '');
                    mask10.css('background', '');
                    mask11.css('background', '');

                    mask.css('z-index', '40');

                    //подсвечиваем маску только на выборе корпусов

                    var bg = mask.attr('data-background');
                    var url = 'url("' + bg;
                    mask.css('background', url);
                    mask.css('background-repeat', 'no-repeat');
                }

                if (className == 8) {
                    var mask1 = $('.section3_1-mask');
                    var mask2 = $('.section3_2-mask');
                    var mask3 = $('.section3_3-mask');
                    var mask5 = $('.section3_5-mask');
                    var mask4 = $('.section3_4-mask');
                    var mask6 = $('.section3_6-mask');
                    var mask7 = $('.section3_7-mask');
                    var mask9 = $('.section3_9-mask');
                    var mask10 = $('.section3_10-mask');
                    var mask11 = $('.section3_11-mask');


                    var mask = $('.section3_8-mask');

                    mask1.css('background', '');
                    mask2.css('background', '');
                    mask3.css('background', '');
                    mask5.css('background', '');
                    mask4.css('background', '');
                    mask6.css('background', '');
                    mask7.css('background', '');
                    mask9.css('background', '');
                    mask10.css('background', '');
                    mask11.css('background', '');

                    mask.css('z-index', '40');

                    //подсвечиваем маску только на выборе корпусов

                    var bg = mask.attr('data-background');
                    var url = 'url("' + bg;
                    mask.css('background', url);
                    mask.css('background-repeat', 'no-repeat');
                }

                if (className == 9) {
                    var mask1 = $('.section3_1-mask');
                    var mask2 = $('.section3_2-mask');
                    var mask3 = $('.section3_3-mask');
                    var mask5 = $('.section3_5-mask');
                    var mask4 = $('.section3_4-mask');
                    var mask6 = $('.section3_6-mask');
                    var mask7 = $('.section3_7-mask');
                    var mask8 = $('.section3_8-mask');
                    var mask10 = $('.section3_10-mask');
                    var mask11 = $('.section3_11-mask');


                    var mask = $('.section3_9-mask');

                    mask1.css('background', '');
                    mask2.css('background', '');
                    mask3.css('background', '');
                    mask5.css('background', '');
                    mask4.css('background', '');
                    mask6.css('background', '');
                    mask7.css('background', '');
                    mask8.css('background', '');
                    mask10.css('background', '');
                    mask11.css('background', '');


                    mask.css('z-index', '40');

                    //подсвечиваем маску только на выборе корпусов

                    var bg = mask.attr('data-background');
                    var url = 'url("' + bg;
                    mask.css('background', url);
                    mask.css('background-repeat', 'no-repeat');
                }

                if (className == 10) {
                    var mask1 = $('.section3_1-mask');
                    var mask2 = $('.section3_2-mask');
                    var mask3 = $('.section3_3-mask');
                    var mask5 = $('.section3_5-mask');
                    var mask4 = $('.section3_4-mask');
                    var mask6 = $('.section3_6-mask');
                    var mask7 = $('.section3_7-mask');
                    var mask8 = $('.section3_8-mask');
                    var mask9 = $('.section3_9-mask');
                    var mask11 = $('.section3_11-mask');


                    var mask = $('.section3_10-mask');

                    mask1.css('background', '');
                    mask2.css('background', '');
                    mask3.css('background', '');
                    mask5.css('background', '');
                    mask4.css('background', '');
                    mask6.css('background', '');
                    mask7.css('background', '');
                    mask8.css('background', '');
                    mask9.css('background', '');
                    mask11.css('background', '');


                    mask.css('z-index', '40');

                    //подсвечиваем маску только на выборе корпусов

                    var bg = mask.attr('data-background');
                    var url = 'url("' + bg;
                    mask.css('background', url);
                    mask.css('background-repeat', 'no-repeat');
                }

                if (className == 11) {
                    var mask1 = $('.section3_1-mask');
                    var mask2 = $('.section3_2-mask');
                    var mask3 = $('.section3_3-mask');
                    var mask5 = $('.section3_5-mask');
                    var mask4 = $('.section3_4-mask');
                    var mask6 = $('.section3_6-mask');
                    var mask7 = $('.section3_7-mask');
                    var mask8 = $('.section3_8-mask');
                    var mask9 = $('.section3_9-mask');
                    var mask10 = $('.section3_10-mask');
                    var mask12 = $('.section3_12-mask');
                    var mask13 = $('.section3_13-mask');

                    var mask = $('.section3_11-mask');

                    mask1.css('background', '');
                    mask2.css('background', '');
                    mask3.css('background', '');
                    mask5.css('background', '');
                    mask4.css('background', '');
                    mask6.css('background', '');
                    mask7.css('background', '');
                    mask8.css('background', '');
                    mask9.css('background', '');
                    mask10.css('background', '');
                    mask12.css('background', '');
                    mask13.css('background', '');

                    mask.css('z-index', '40');

                    //подсвечиваем маску только на выборе корпусов

                    var bg = mask.attr('data-background');
                    var url = 'url("' + bg;
                    mask.css('background', url);
                    mask.css('background-repeat', 'no-repeat');
                }

            }

            if(parent.hasClass('corpus4-selector')) {
                var href = $(this).attr('data-href');
                $('.go-coprus4-btn').attr('href',href);

                if (className == 1) {
                    var mask2 = $('.section4_2-mask');
                    var mask3 = $('.section4_3-mask');
                    var mask4 = $('.section4_4-mask');


                    var mask = $('.section4_1-mask');

                    mask2.css('background', '');
                    mask3.css('background', '');
                    mask4.css('background', '');

                    mask.css('z-index', '40');

                    //подсвечиваем маску только на выборе корпусов

                    var bg = mask.attr('data-background');
                    var url = 'url("' + bg;
                    mask.css('background', url);
                    mask.css('background-repeat', 'no-repeat');
                }
                if (className == 2) {
                    var mask1 = $('.section4_1-mask');
                    var mask3 = $('.section4_3-mask');
                    var mask4 = $('.section4_4-mask');

                    var mask = $('.section4_2-mask');

                    mask1.css('background', '');
                    mask3.css('background', '');
                    mask4.css('background', '');

                    mask.css('z-index', '40');

                    //подсвечиваем маску только на выборе корпусов

                    var bg = mask.attr('data-background');
                    var url = 'url("' + bg;
                    mask.css('background', url);
                    mask.css('background-repeat', 'no-repeat');
                }

                if (className == 3) {
                    var mask1 = $('.section4_1-mask');
                    var mask2 = $('.section4_2-mask');
                    var mask4 = $('.section4_4-mask');


                    var mask = $('.section4_3-mask');

                    mask1.css('background', '');
                    mask2.css('background', '');
                    mask4.css('background', '');


                    mask.css('z-index', '40');

                    //подсвечиваем маску только на выборе корпусов

                    var bg = mask.attr('data-background');
                    var url = 'url("' + bg;
                    mask.css('background', url);
                    mask.css('background-repeat', 'no-repeat');
                }

                if (className == 4) {
                    var mask1 = $('.section4_1-mask');
                    var mask2 = $('.section4_2-mask');
                    var mask3 = $('.section4_3-mask');

                    var mask = $('.section4_4-mask');

                    mask1.css('background', '');
                    mask2.css('background', '');
                    mask3.css('background', '');

                    mask.css('z-index', '40');

                    //подсвечиваем маску только на выборе корпусов

                    var bg = mask.attr('data-background');
                    var url = 'url("' + bg;
                    mask.css('background', url);
                    mask.css('background-repeat', 'no-repeat');
                }

            }

            $('.corpus-1-btn').click(function() {
                $('.index-change-wrap').css('display','none');
                $('.coprus1-change-wrap').css('display','block');
                $(this).css('display','none');
                $('.corpus1-paginator').css('display','block');
                $('.corpus-main').css('display', 'none');
            });

            $('.corpus-2-btn').click(function() {
                $('.index-change-wrap').css('display','none');
                $('.corpus2-change-wrap').css('display','block');
                $(this).css('display','none');
                $('.corpus2-paginator').css('display','block');
                $('.corpus-main').css('display', 'none');
            });

            $('.corpus-3-btn').click(function() {
                $('.index-change-wrap').css('display','none');
                $('.corpus3-change-wrap').css('display','block');
                $(this).css('display','none');
                $('.corpus3-paginator').css('display','block');
                $('.corpus-main').css('display', 'none');
            });

            $('.corpus-4-btn').click(function() {
                $('.index-change-wrap').css('display','none');
                $('.corpus4-change-wrap').css('display','block');
                $(this).css('display','none');
                $('.corpus4-paginator').css('display','block');
                $('.corpus-main').css('display', 'none');
            });
        }
    });


//слайдер секций на corpus-page

var slidesLength = $('.corpus-page-item').length;
console.log(slidesLength);

$('.corpus-page-list').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: true,
    arrows: true,
    infinite: false,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 440,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
});

if(slidesLength > 4) {
    $('.corpus-page-list').addClass('corpus-page-list_before');


}



//страница корпуса нумерация этажей

$('.corpus-inner').each(function() {
    var child = $(this).children('li');
    var totalChild = child.length;
    var start = 0;

    child.each(function() {
       var div =  '<div class="number">';
       $(this).append( div +  (totalChild - start));
       start++;
    });
});

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
                $("input.sliderValue1[data-index=" + i + "]").val(ui.values[i]);
            }
        }
    });

    $("input.sliderValue").change(function() {
        var $this = $(this);
        $("#slider").slider("values", $this.data("index"), $this.val());
    });
});

//площадь

$(document).ready(function() {
    $('#slider1').slider({
        min: 30,
        max: 100,
        step: 1,
        range: true,
        values: [30,100],
        slide: function(event, ui) {
            for (var i = 0; i < ui.values.length; ++i) {
                $("input.sliderValue2[data-index=" + i + "]").val(ui.values[i]);
            }
        }
    });


    $('input.sliderValue1').change(function() {
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
                $("input.sliderValue3[data-index=" + i + "]").val(ui.values[i]);
            }
        }
    });


    $('input.sliderValue1').change(function() {
        var $this = $(this);
        $('#slider2').slider('values', $this.data('index'), $this.val());
    })
});

//кухня

$(document).ready(function() {
    $('#slider3').slider({
        min: 10,
        max: 14,
        step: 0.1,
        range: true,
        values: [10,30],
        slide: function(event, ui) {
            for (var i = 0; i < ui.values.length; ++i) {
                $("input.sliderValue4[data-index=" + i + "]").val(ui.values[i]);
            }
        }
    });


    $('input.sliderValue1').change(function() {
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
        
        if($('.view-list_item:first-of-type .view-button').hasClass('view-active')) {
            $('.variant-1').removeClass('opacity0');
            $('.variant-1').addClass('opacity1', 1000, 'linear');
            
            $('.variant-2').removeClass('opacity1');
            $('.variant-2').addClass('opacity0', 1000, 'linear');
            
            $('.variant-3').removeClass('opacity1');
            $('.variant-3').addClass('opacity0', 1000, 'linear');
            
            $('.variant-4').removeClass('opacity1');
            $('.variant-4').addClass('opacity0', 1000, 'linear');
            
            console.log('2d');

        } else if($('.view-list_item:nth-of-type(2) .view-button').hasClass('view-active')) {
            $('.variant-2').removeClass('opacity0');
            $('.variant-2').addClass('opacity1', 1000, 'linear');
            
            $('.variant-1').removeClass('opacity1');
            $('.variant-1').addClass('opacity0', 1000, 'linear');
            
            $('.variant-3').removeClass('opacity1');
            $('.variant-3').addClass('opacity0', 1000, 'linear');
            
            $('.variant-4').removeClass('opacity1');
            $('.variant-4').addClass('opacity0', 1000, 'linear');
            
            console.log('3d');

        } else if($('.view-list_item:nth-of-type(3) .view-button').hasClass('view-active')) {
            $('.variant-3').removeClass('opacity0');
            $('.variant-3').addClass('opacity1', 1000, 'linear');
            
            $('.variant-1').removeClass('opacity1');
            $('.variant-1').addClass('opacity0', 1000, 'linear');
            
            $('.variant-2').removeClass('opacity1');
            $('.variant-2').addClass('opacity0', 1000, 'linear');
            
            $('.variant-4').removeClass('opacity1');
            $('.variant-4').addClass('opacity0', 1000, 'linear');
            
            console.log('3d-360')

        } else if($('.view-list_item:nth-of-type(4) .view-button').hasClass('view-active')) {
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
    })
     
});
//настройка Google Maps Api


var map;
var infowindow;

//инициализация карты

function initMap() {
    var c = {lat: 59.949171, lng: 30.263335};
    
    map = new google.maps.Map(document.getElementById('map'), {
        center: c,
        zoom: 15,
    });
    
    //маркер жилого комплекса
    
    var home = new google.maps.Marker({
        position: c,
        map: map,
        icon: {
            url: '../img/mapicon.png',
            size: new google.maps.Size(31,20),
            origin: new google.maps.Point(0,0),
            anchor: new google.maps.Point(0,32),
        }
    }) 
    
    infowindow = new google.maps.InfoWindow();
    var service = new google.maps.places.PlacesService(map);
    service.nearbySearch({
        location: c,
        radius: 1000,
        type: arr[0]
    },callback);
    
   
    
}

 //возвращаем результат поиска

function callback(results,status) {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
        for (var i = 0; i < results.length; i++) {
            createMarker(results[i]);
        }
    }
}

//создаем маркеры



function createMarker(place) {
    var placeLoc = place.geometry.location;
    var marker = new google.maps.Marker({
    map: map,
    position: place.geometry.location,
});
    
    var service1 = new google.maps.places.PlacesService(map);
    
    
    
     google.maps.event.addListener(marker, 'click', function() {
              infowindow.setContent(place.name);
              infowindow.open(map, this);
            });
}


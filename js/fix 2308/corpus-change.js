/*----------------------------------------------
-------------------------------------------------
//со строки  431
//до комментария //выделение сердца в избранном
-------------------------------------------------
------------------------------------------------
*/

//страница корпусов

//mouseenter
$(document).ready(function () {

$('.corpus-mask').mouseenter(function() {
    var desc = $(this).find('.corpus-desc');
    var corpName = $(this).find('.corpus-name');
    var sectionName = $(this).find('.section-name');

    $(this).css('z-index','40');

    //подсвечиваем маску только на выборе корпусов

    var bg = $(this).attr('data-background');
    var url = 'url("' + bg +'")';
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

$('.1').click(function() {
    $('.corpus-paginator_item p').removeClass('active-corpus');
    $(this).addClass('active-corpus');

    $('#parametres_link').attr('href', $(this).attr('data-href'));

    $('.index-change-wrap').css('display','none');
    $('.corpus2-change-wrap').css('display','none');
    $('.corpus3-change-wrap').css('display','none');
    $('.corpus4-change-wrap').css('display','none');
    $('.coprus1-change-wrap').css('display','block');
});

$('.2').click(function() {
    $('.corpus-paginator_item p').removeClass('active-corpus');
    $(this).addClass('active-corpus');

    $('#parametres_link').attr('href', $(this).attr('data-href'));

    $('.index-change-wrap').css('display','none');
    $('.coprus1-change-wrap').css('display','none');
    $('.corpus3-change-wrap').css('display','none');
    $('.corpus4-change-wrap').css('display','none');
    $('.corpus2-change-wrap').css('display','block');
});

$('.3').click(function() {
    $('.corpus-paginator_item p').removeClass('active-corpus');
    $(this).addClass('active-corpus');

    $('#parametres_link').attr('href', $(this).attr('data-href'));

    $('.index-change-wrap').css('display','none');
    $('.corpus2-change-wrap').css('display','none');
    $('.coprus1-change-wrap').css('display','none');
    $('.corpus4-change-wrap').css('display','none');
    $('.corpus3-change-wrap').css('display','block');
});


$('.4').click(function() {
    $('.corpus-paginator_item p').removeClass('active-corpus');
    $(this).addClass('active-corpus');

    $('#parametres_link').attr('href', $(this).attr('data-href'));

    $('.index-change-wrap').css('display','none');
    $('.corpus2-change-wrap').css('display','none');
    $('.corpus3-change-wrap').css('display','none');
    $('.coprus1-change-wrap').css('display','none');
    $('.corpus4-change-wrap').css('display','block');
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

    $('.corpus-paginator_item p').removeClass('active-corpus');

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

$('.corpus-page-list').slick({
   slidesToShow: 4,
   slidesToScroll: 1,
    dots: true,
    arrows: true,
    infinite: true,
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

});
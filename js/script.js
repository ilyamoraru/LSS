$(function() {
    
    //owl carousel 
    
    //header
    
    $('.owl-carousel').owlCarousel( {
        items: 1,
        nav: true,
        dots: true,
        dotsClass: 'header-slider_dots',
        loop: true,
        navText: ["",""],
        //autoplay: true,
        autoplayTimeout: 7000,
        lazyLoad: true,
        autoplaySpeed: 1500,
    });
    
    //sales
    
    
    //other mask
    
    function wrap()  {
        $('.image-container').css('width', function(){
            var w = $('.image-other').width();
            return w;
        }) 
        $('.image-container').css('height', function() {
            var h = $('.image-other').height();
            return h;
        })
    }
    
    wrap();
})
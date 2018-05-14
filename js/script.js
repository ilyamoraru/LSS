var arr = ['bank'];

$(function() {
    
    //параметры слайдера
        
    $('.owl-carousel').owlCarousel( {
        items: 1,//количество слайдов
        nav: true,//навигация
        dots: true,//пагинация
        dotsClass: 'header-slider_dots',
        loop: true,
        navText: ["",""],
        /*параметры автолистания*/
        autoplay: true,
        autoplayTimeout: 7000,
        lazyLoad: true,
        autoplaySpeed: 1500,
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
    
    wrap();
    
    //фильтрация по запросам на карте
    
   
    $('.map-filter_item').click(function() {
        $('.map-filter_item').removeClass('activeMap');
        $(this).addClass('activeMap');
        arr[0] = $(this).attr('data-name');//получаем значение фильтра
        initMap();
        callback(results,status);
        createMarker(place);
    });
     
});


//настройка Google Maps Api


var map;
var infowindow;

//инициализация карты

function initMap() {
    var c = {lat: 59.986815, lng: 30.321087};
    
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



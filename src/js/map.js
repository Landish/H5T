function initMap() {

    var $map = $('#map');

    // if map was not found
    // return false
    if(!$map.length) {
        return false;
    }

    var positions = {
        lat: parseFloat($map.data('lat')),
        lng: parseFloat($map.data('lng'))
    };

    var map = new google.maps.Map($map[0], {
        zoom: $map.data('zoom'),
        disableDefaultUI: true,
        zoomControl: true,
        scrollwheel: false,
        center: positions
    });

    var marker = new google.maps.Marker({
        position: positions,
        map: map,
        icon:'/dist/images/map-pin.png'
    });


    google.maps.event.addDomListener(window, "resize", function() {
        var center = map.getCenter();
        google.maps.event.trigger(map, "resize");
        map.setCenter(center);
    });

}
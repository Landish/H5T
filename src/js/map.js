// initialize google maps
function initMap() {

    // map container
    var container = document.getElementById('map');

    // if map was not found
    if (!container) return false;

    // pin coordinates
    var positions = {
        lat: parseFloat(container.dataset['lat'] || '41.732438'),
        lng: parseFloat(container.dataset['lng'] || '44.7688136')
    };

    // zoom level
    var zoom = parseInt(container.dataset['zoom'] || '15');

    // zoom control
    var zoomControl = container.dataset['zoomControl'] != 'false';

    // scroll wheel
    var scrollwheel = container.dataset['scrollwheel'] != 'false';

    // disable default ui
    var disableDefaultUI = container.dataset['disableDefaultUi'] != 'false';

    // setup a map
    var map = new google.maps.Map(container, {
        zoom: zoom,
        disableDefaultUI: disableDefaultUI,
        zoomControl: zoomControl,
        scrollwheel: scrollwheel,
        center: positions
    });

    // setup a marker
    var marker = new google.maps.Marker({
        position: positions
    });

    // set marker to current map
    marker.setMap(map);

    // responsive map
    google.maps.event.addDomListener(window, "resize", function () {
        var center = map.getCenter();
        google.maps.event.trigger(map, "resize");
        map.setCenter(center);
    });

}
"use strict";

mapboxgl.accessToken = mapboxToken;

var restuarants = [
    {

    },
    {

    },
    {

    }
];

var option = {
    maxWidth: '300px',
    color: 'red',
    draggable: true,
    anchor: 'bottom-left'

}

geocode('2438 W Anderson Ln ste 100 Austin, TX', mapboxToken).then(result => {
    console.log(result);
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v9',
        zoom: 16
    });
    map.setCenter(result);

    // create Marker
    var marker = new mapboxgl.Marker(option)
        .setLngLat(result)
        .addTo(map);
    var popup = new mapboxgl.Popup(option)
        .setHTML('<h3>Hopdoddy Burger Bar</h3>')
        .addTo(map);

    // Connect popup to marker
    marker.setPopup(popup);
    let open = popup.isOpen();
    if (open) {
        popup.remove();
    }
});
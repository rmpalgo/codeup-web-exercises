"use strict";

mapboxgl.accessToken = mapboxToken;

var restaurants = [
    {
        name: 'Hopdoddy Burger Bar',
        address: '2438 W Anderson Ln ste 100, Austin, TX',
        description: 'Best Burger in '
    },
    {
        name: 'Jin Korean BBQ',
        address: '3810 S Cooper St #130, Arlington, TX 76015',
        description: 'Best Korean bbq in '
    },
    {
        name: 'Texas Roadhouse',
        address: '2490 I-20 Frontage Rd, Grand Prairie, TX 75052',
        description: 'Best Steak in '
    }
];



var zoomLevel = document.getElementById('submit');
var select = document.getElementById('zoom-level');
var address = document.getElementById('address');
console.log(address);


// zoomLevel.addEventListener('click', getZoom);
select.addEventListener('blur', getZoom);


var option = {
    maxWidth: '300px',
    color: 'red',
    draggable: true,
    anchor: 'bottom-left'

};

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v9',
    zoom: 0,
    center: [-97.14, 31.54]
});

// The zoom functionality worked but there is no state where the center is so hardcoded setCenter
function getZoom() {
    map.setZoom(select.value);
    map.setCenter([-97.14, 31.54]);
}

// Add restaurant
/*
restaurants.push({
    name: 'new restaurant',
    address: address.value,
    description: 'Best restaurant in the city of'
});
*/

function addRestaurant () {
    restaurants.forEach( (restaurant, index) => {
        geocode(restaurant.address, mapboxToken).then( result => {
            console.log(result);

            //    add additional code for geocode
            geoRestaurant(result, restaurant);
        });
    });
}


function geoRestaurant(result, restaurant) {

    var popup = new mapboxgl.Popup()
        .setHTML(`<h3>${restaurant.name}<br>${restaurant.address}<br><hr> ${restaurant.description} <em>${restaurant.address.split(',')[1]}</em></h3>`)
        .addTo(map);

    new mapboxgl.Marker(option)
        .setLngLat(result)
        .setPopup(popup)
        .addTo(map)

}

addRestaurant();

// geocode('2438 W Anderson Ln ste 100 Austin, TX', mapboxToken).then(result => {
//     console.log(result);
//     // var map = new mapboxgl.Map({
//     //     container: 'map',
//     //     style: 'mapbox://styles/mapbox/streets-v9',
//     //     zoom: 16
//     // });
//     // map.setCenter(result);
//     //
//     // // create Marker
//     // var marker = new mapboxgl.Marker(option)
//     //     .setLngLat(result)
//     //     .addTo(map);
//     // var popup = new mapboxgl.Popup(option)
//     //     .setHTML('<h3>Hopdoddy Burger Bar</h3>')
//     //     .addTo(map);
//     //
//     // // Connect popup to marker
//     // marker.setPopup(popup);
//     // let open = popup.isOpen();
//     // if (open) {
//     //     popup.remove();
//     // }
// });
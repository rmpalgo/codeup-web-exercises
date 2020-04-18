"use strict";
(function(){
    $(document).ready(function() {
        var latValue = 0;
        var longValue = 0;

        function initLocation () {
            latValue = 32.79;
            longValue = -96.79;
        }

        initLocation();

        // MAPBOX ==========================================================>
        var marker = {};
        function createMapBox (mapboxToken, result) {
            if(result !== undefined) {
                longValue = result[0];
                latValue = result[1];
            }
            mapboxgl.accessToken = mapboxToken;
            var map = new mapboxgl.Map({
                container: 'map',
                style: 'mapbox://styles/mapbox/streets-v11',
                center: [-96.79, 32.79],
                zoom: 5
            });

            var marker = new mapboxgl.Marker({
                draggable: true
            })
                .setLngLat([longValue, latValue ])
                .addTo(map);
            map.flyTo({center: [longValue, latValue], zoom: 9});

            function onDragEnd() {
                let lngLat = marker.getLngLat();
                let latValue = lngLat.lat;
                let longValue = lngLat.lng;
                console.log(latValue);
                console.log(longValue);
                locationExecution(latValue, longValue);
            }
            marker.on('dragend', onDragEnd);
        }
        createMapBox(mapboxToken);

        // MAPBOX ==========================================================>


        function locationExecution (latValue, longValue) {
            let lat = latValue;
            let long = longValue;
            $.ajax({
                "url": "https://api.openweathermap.org/data/2.5/forecast",
                "type": "GET",
                "data": {
                    "APPID": OWM_KEY,
                    "lat":    lat,
                    "lon":   long,
                    "units": "Imperial"
                }
            }).done(function (data) {
                $('#forecast').empty();
                console.log(data);
                let dataArr = data.list;
                setCity(data);
                dataArr.forEach( (item, index) => {
                    if(index % 8 === 0) {
                        makeForecast(item);
                    }
                });
            }).fail(function (error) {
                console.error(error);
            });
        }
        locationExecution(32.79, -96.79 );

        /**
         *
         * @param {object} obj
         * @returns {string} HTML rendering of forecast weather
         *
         */

        /*
        <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div>
         */

        function makeForecast (obj) {
            let contentHTML = ``;
            contentHTML = `<div id="cards" class="mt-3 mb-5 card text-white"><div id="ul-forecast" class="card-body mb-4">
                                <h5 id="weather-date" class="card-title text-center">
                              ${getDate(obj)}
                                </h5>
                                <h6 id="weather-temperatures" class="card-subtitle text-center">
                                <p>
                                    ${getTemp(obj)[0]} / ${getTemp(obj)[1]}
                                </p>
                                <p>
                                    <img alt="weather-icon" src="http://openweathermap.org/img/w/${getIcon(obj)}.png">
                                </p>
                                </h6>       
                                <h5 id="weather-description" class="card-text">
                                <p>
                                    Description: <strong>${weatherDescription(obj)[0]}</strong>
                                 </p>
                                <p>
                                    Humidity: <strong>${weatherDescription(obj)[1]}</strong>
                                 </p>
                                </h5>
                                <h5 id="weather-wind" class="card-text">
                               Wind: <strong>${getWind(obj)}</strong>
                                 </h5>
                                <h5 id="weather-pressure" class="card-text">
                                <p>Pressure: <strong>${getPressure(obj)}</strong></p>
                                </h5>
                             </div></div>`;
            $('#forecast').append(contentHTML);
        }

        function setCity (obj) {
            if (obj.city.name === undefined) {
                $('#city').text(`City: Your are probably lost in the middle of the ocean!`);
            } else {
                console.log($('#city').text(`Current City: ${obj.city.name}`));
            }
        }

        /**
         *
         * @param {object} obj
         * @returns {string} date in mm/dd/year format
         */
        function getDate (obj) {
            let date = obj.dt_txt.split(" ")[0].split("-");
            return `${date[1]} / ${date[2]} / ${date[0]}`
        }

        /**
         *
         * @param {object} obj
         * @returns {[]} [description, humidity]
         */
        function weatherDescription (obj) {
            let info = [];
            info.push(obj.weather[0].description);
            info.push(obj.main.humidity);
            return info
        }

        /**
         *
         * @param {object} obj
         * @returns {number} wind speed
         */
        function getWind (obj) {
           return obj.wind.speed;
        }

        /**
         *
         * @param {object} obj
         * @returns {number} pressure
         */
        function getPressure (obj) {
            return obj.main.pressure;
        }

        /**
         *
         * @param {object} obj
         * @returns {[]} [min_temp, max_temp]
         */
        function getTemp (obj) {
            let temp = [];
            temp.push(obj.main.temp_min);
            temp.push(obj.main.temp_max);
            return temp;
        }

        /**
         *
         * @param {object} obj
         * @returns {string}
         */
        function getIcon (obj) {
            return obj.weather[0].icon;
        }

        function lngLatFromSearch (result) {
            locationExecution (result[1], result[0]);
        }

        function searchCity (address) {
            if (typeof address !== 'string') {
                address = '701 Commerce St. Dallas, TX 75202'
            }
            geocode(address, mapboxToken).then(function(result) {
                var map = new mapboxgl.Map({
                    container: 'map',
                    style: 'mapbox://styles/mapbox/streets-v9',
                    zoom: 16,
                    showCompass: true
                });
                console.log(result);
                lngLatFromSearch(result);
                marker = new mapboxgl.Marker({draggable: true})
                    .setLngLat(result)
                    .addTo(map);
                map.setCenter(result);
                map.flyTo({center: [result[0], result[1]], zoom: 9});
                marker.remove();
                createMapBox (mapboxToken, result);

            });
        }


        /*
        function onDragEnd() {
            let lngLat = marker.getLngLat();
            let latValue = lngLat.lat;
            let longValue = lngLat.lng;
            console.log(latValue);
            console.log(longValue);
            locationExecution(latValue, longValue);
        }
         */

        $('#submit').click(function (event) {
            event.preventDefault();
            let address = $('#address').val();
            console.log(address);
            searchCity(address);
            $('#address').val('');
        });

        /*
        function geoRestaurant(result, restaurant) {

            var popup = new mapboxgl.Popup()
                .setHTML(`<h3>${restaurant.name}<br>${restaurant.address}<br><hr> ${restaurant.description} <em>${restaurant.address.split(',')[1]}</em></h3>`);

            new mapboxgl.Marker(option)
                .setLngLat(result)
                .setPopup(popup)
                .addTo(map)

        }
         */
    });
})();
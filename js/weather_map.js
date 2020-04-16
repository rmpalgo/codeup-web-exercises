"use strict";
(function(){
    $(document).ready(function() {

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

        function makeForecast (obj) {
            let contentHTML = ``;
            contentHTML = `<div><ul id="ul-forecast" class="list-group list-group-flush mb-4">
                                <li id="weather-date" class="list-group-item text-center">
                              ${getDate(obj)}
                                </li>
                                <li id="weather-temperatures" class="list-group-item text-center">
                                <p>
                                    ${getTemp(obj)[0]} / ${getTemp(obj)[1]}
                                </p>
                                <p>
                                    <img alt="weather-icon" src="http://openweathermap.org/img/w/${getIcon(obj)}.png">
                                </p>
                                </li>       
                                <li id="weather-description" class="list-group-item">
                                <p>
                                    Description: <strong>${weatherDescription(obj)[0]}</strong>
                                 </p>
                                <p>
                                    Humidity: <strong>${weatherDescription(obj)[1]}</strong>
                                 </p>
                                </li>
                                <li id="weather-wind" class="list-group-item">
                               Wind: <strong>${getWind(obj)}</strong>
                                 </li>
                                <li id="weather-pressure" class="list-group-item">
                                <p>Pressure: <strong>${getPressure(obj)}</strong></p>
                                </li>
                             </ul></div>`;
            $('#forecast').append(contentHTML);
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
                lngLatFromSearch(result);
            });
        }

        $('#submit').click(function (event) {
            event.preventDefault();
            let address = $('#address').val();
            console.log(address);
            searchCity(address);
            $('#address').val('');
        });



    // MAPBOX

        mapboxgl.accessToken = mapboxToken;
        var coordinates = document.getElementById('coordinates');
        var map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [-96.79, 32.79],
            zoom: 5
        });

        var marker = new mapboxgl.Marker({
            draggable: true
        })
            .setLngLat([-96.79, 32.79])
            .addTo(map);

        function onDragEnd(result) {
            let lngLat = marker.getLngLat();
            let latValue = lngLat.lat;
            let longValue = lngLat.lng;
            console.log(latValue);
            console.log(longValue);
            locationExecution(latValue, longValue);
        }
         marker.on('dragend', onDragEnd);
    });
})();
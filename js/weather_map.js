"use strict";
(function(){
    $(document).ready(function() {
        var latValue = 0;
        var longValue = 0;

        (function initLocation () {
            latValue = 32.79;
            longValue = -96.79;
        })();

        // MAPBOX ==========================================================>

        var marker = {};
        function createMapBox (mapboxToken, result) {
            if(result !== undefined) {
                longValue = result[0];
                latValue = result[1];
            }
            mapboxgl.accessToken = mapboxToken;
            let map = new mapboxgl.Map({
                container: 'map',
                style: 'mapbox://styles/mapbox/streets-v11',
                center: [-96.79, 32.79],
                zoom: 5
            });

            let marker = new mapboxgl.Marker({
                draggable: true
            })
                .setLngLat([longValue, latValue ])
                .addTo(map);
            map.flyTo({center: [longValue, latValue], zoom: 9});

            function onDragEnd() {
                let lngLat = marker.getLngLat();
                let latValue = lngLat.lat;
                let longValue = lngLat.lng;
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
                let dataArr = data.list;
                console.log(dataArr);
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
                                    <img alt="weather-icon" src="${getIcon(obj)}">
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
                $('#city').text(`Current City: ${obj.city.name}`);
            }
        }

        /**
         *
         * @param {object} obj
         * @returns {string} date in mm/dd/year format
         */
        function getDate (obj) {
            let dayDate = new Date(obj.dt_txt);
            let day = dayDate.getDay();
            console.log(dayDate);
            if (day === 0) {
                return 'Sunday';
            } else if (day === 1) {
                return 'Monday'
            } else if (day === 2) {
                return 'Tuesday'
            } else if (day === 3) {
                return 'Wednesday'
            } else if (day === 4) {
                return 'Thursday'
            } else if (day === 5) {
                return 'Saturday'
            }
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
            let weatherDescription = obj.weather[0].description;
            if (weatherDescription.indexOf('clear sky') !== -1) {
                return 'imgs/sunny.png'
            } else if (weatherDescription.indexOf('few clouds') !== -1 || obj.weather[0].description === 'scattered clouds' || obj.weather[0].description === 'overcast clouds' ) {
                return 'imgs/overcast.png'
            } else if (weatherDescription === 'broken clouds') {
                return 'imgs/broken-cloud.png'
            } else if (weatherDescription.indexOf('rain') !== -1 ||  weatherDescription.indexOf('thunderstorm') !== -1 || weatherDescription.indexOf('mist') !== -1) {
                return 'imgs/rain.png'
            } else if (weatherDescription.indexOf('snow') !== -1) {
                return 'imgs/snow.png'
            }
        }

        function lngLatFromSearch (result) {
            locationExecution (result[1], result[0]);
        }

        function searchCity (address) {
            geocode(address, mapboxToken).then(function(result) {
                 let map = new mapboxgl.Map({
                    container: 'map',
                    style: 'mapbox://styles/mapbox/streets-v9',
                    zoom: 16,
                    showCompass: true
                });
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

        $('#submit').click(function (event) {
            event.preventDefault();
            let address = $('#address').val();
            searchCity(address);
            $('#address').val('');
        });

        $('#address').keypress(function (e) {
            let key = e.which;
            if(key == 13) {
                let address = $(this).val();
                searchCity(address);
                $(this).val('');
            }
        });

    });
})();
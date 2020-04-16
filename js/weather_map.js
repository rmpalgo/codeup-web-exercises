"use strict";
(function(){
    $(document).ready(function() {

        $.ajax({
            "url": "https://api.openweathermap.org/data/2.5/forecast",
            "type": "GET",
            "data": {
                "APPID": OWM_KEY,
                "q": "Dallas, USA",
                "units": "Imperial"
            }
        }).done(function (data) {
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

    // MAPBOX

        mapboxgl.accessToken = mapboxToken;

        var restaurants = [
            {
                name: 'Hopdoddy Burger Bar',
                address: '3227 McKinney Ave Suite 102, Dallas, TX',
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

        var map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v9',
            zoom: 0,
            center: [-97.14, 32.77]
        });

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
                .setHTML(`<h3>${restaurant.name}<br>${restaurant.address}<br><hr> ${restaurant.description} <em>${restaurant.address.split(',')[1]}</em></h3>`);

            new mapboxgl.Marker()
                .setLngLat(result)
                .setPopup(popup)
                .addTo(map)

        }

        addRestaurant();

    });
})();
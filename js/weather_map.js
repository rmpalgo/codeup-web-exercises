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
            let dataArr = data.list[0];
            makeForecast(dataArr)
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
            let liHTML = ``;
            /*
        <ul id="ul-forecast" class="list-group list-group-flush">
            <li id="weather-date" class="list-group-item text-center">Cras justo odio</li>
            <li id="weather-temperatures" class="list-group-item text-center"></li>
            <li id="weather-description" class="list-group-item"></li>
            <li id="weather-wind" class="list-group-item"></li>
            <li id="weather-pressure" class="list-group-item"></li>
         </ul>
             */
            // make UL

            // make children li's
            liHTML = `<ul id="ul-forecast" class="list-group list-group-flush">
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
                                    Description: ${weatherDescription(obj)[0]}
                                 </p>
                                <p>
                                    Humidity: ${weatherDescription(obj)[1]}
                                 </p>
                            </li>
                            <li id="weather-wind" class="list-group-item">
                               Wind: ${getWind(obj)}
                            </li>
                            <li id="weather-pressure" class="list-group-item">
                                Pressure: ${getPressure(obj)}
                            </li>
                      </ul>`;

            $('#forecast').append(liHTML);
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
            // return `<img alt="weather-icon" src="http://openweathermap.org/img/w/${icon}.png">`;
        }

    });
})();
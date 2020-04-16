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
                    console.log(index);
                    console.log(makeForecast(item));
                }
            });
        }).fail(function (error) {
            console.error(error);
        });

        /*
          lists: [...40]
          uniqueDates = [];
          lists.forEach(function (item) {
            if (d.
            dataArr.
                // Get unique dates: if date !== to last date then push index to uniqueDates
                    code here...

                // use the for loop to loop through the first 5 unique index and render those object content in the page?
           });
        */

        // var d = new Date();
        // console.log(d);
        // console.log(d.getDay());


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

    });
})();
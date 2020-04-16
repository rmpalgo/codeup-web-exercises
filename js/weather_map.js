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

        function makeForecast (obj) {
            $('#weather-date').text(getDate(obj));
            $('#weather-temperatures').append(getTemp(obj));
            $('#weather-temperatures').append(getIcon(obj));
            $('#weather-description').append(weatherDescription(obj));
            $('#weather-wind').text(getWind(obj));
            $('#weather-pressure').text(getPressure(obj));
        }

        function getDate (obj) {
            let date = obj.dt_txt.split(" ")[0].split("-");
            return `${date[1]} / ${date[2]} / ${date[0]}`
        }

        function weatherDescription (obj) {
            let info = [];
            info.push(obj.weather[0].description);
            info.push(obj.main.humidity);
            return `<p>Description: ${info[0]}</p>
                    <p>Humidity: ${info[1]}</p>`;
        }

        function getWind (obj) {
           return `Wind: ${obj.wind.speed}`;
        }

        function getPressure (obj) {
            return `Pressure: ${obj.main.pressure}`;
        }

        function getTemp (obj) {
            let temp = [];
            temp.push(obj.main.temp_min);
            temp.push(obj.main.temp_max);
            return `<p>${temp[0]} / ${temp[1]}</p>`
        }

        function getIcon (obj) {
            let icon = obj.weather[0].icon;
            return `<img alt="weather-icon" src="http://openweathermap.org/img/w/${icon}.png">`;
        }


    });
})();
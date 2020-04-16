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
            let firstData = data.list[0];
            $('#weather-date').text(getDate(firstData));
        }).fail(function (error) {
            console.error(error);
        });

        function getDate (arr) {
            let date = arr.dt_txt.split(" ")[0].split("-");
            return `${date[1]} / ${date[2]} / ${date[0]}`
        }

        function weatherDescription (arr) {
            let info = [];

        }


    });
})();
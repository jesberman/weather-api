// document.write('<script type="text/javascript" src="assets/javascript/weatherArray.js"></script>');

function getWeather() {
    var cityEntry;
    cityEntry = document.getElementById("city-input").value;
    var weatherMap = "https://api.openweathermap.org/data/2.5/weather?q=";
    var apiKey = "&APPID=558a20e42f3c2c93a5ee65e035215b8a";
    var url =weatherMap+cityEntry+apiKey;
    console.log(url);

    $.ajax({
        url: url,
        method: "GET"
    }).then(function (response) {
        document.getElementById("city-info").innerHTML = (response.name)+", ";
        document.getElementById("country-info").innerHTML = (response.sys.country);
        document.getElementById("weather-info").innerHTML = (response.weather[0].main);

        var tempKelvin = response.main.temp;
        var tempFarenheit = tempKelvin * 9 / 5 - 459.67;
        var tempFarenheitRoundedOff = tempFarenheit.toFixed(0);
        document.getElementById("temp-info").innerHTML = tempFarenheitRoundedOff + "&#8457";
        
        var highKelvin = response.main.temp_max;
        var highFarenheit = highKelvin * 9 /5 -459.67;
        var highFarenheitRoundedOff = highFarenheit.toFixed(0);
        document.getElementById("high-info").innerHTML = highFarenheitRoundedOff + "&#8457";
        
        var lowKelvin = response.main.temp_min;
        var lowFarenheit = lowKelvin * 9 /5 -459.67;
        var lowFarenheitRoundedOff = lowFarenheit.toFixed(0);
        document.getElementById("low-info").innerHTML = lowFarenheitRoundedOff + "&#8457";
        
        // document.getElementById("cloud-info").innerHTML = (response.clouds.all) + "%";
        document.getElementById("humid-info").innerHTML = (response.main.humidity) + "%";
        var windDirection;
        var windDirectionInDegrees = (response.wind.deg);

        if(0 < windDirectionInDegrees && windDirectionInDegrees < 22.5){
            windDirection = "North";
        }
        else if (22.5 < windDirectionInDegrees && windDirectionInDegrees < 67.5) {
            windDirection ="North East";
        }
        else if (67.5 < windDirectionInDegrees && windDirectionInDegrees < 112.5) {
            windDirection ="East";
        }
        else if (112.5 < windDirectionInDegrees && windDirectionInDegrees < 157.5) {
            windDirection ="South East";
        }
        else if (157.5 < windDirectionInDegrees && windDirectionInDegrees < 202.5) {
            windDirection ="South";
        }
        else if (202.5 < windDirectionInDegrees && windDirectionInDegrees < 247.5) {
            windDirection ="South West";
        }
        else if (247.5 < windDirectionInDegrees && windDirectionInDegrees < 292.5) {
            windDirection ="West";
        }
        else if (292.5 < windDirectionInDegrees && windDirectionInDegrees < 337.5) {
            windDirection ="North West";
        }
        else if (windDirectionInDegrees > 337.5) {
            windDirection ="North";
        }
        document.getElementById("wind-info").innerHTML = windDirection;
        
        var icon = "<img src='assets/images/"+(response.weather[0].main)+".png'>";
        document.getElementById("picture-info").innerHTML = icon;
    });
    $("#card").css("visibility", "visible");
};
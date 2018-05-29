let weatherButton = document.getElementById('weatherButton');

//output variables
let output = document.getElementById('output');
let cityOutput = document.getElementById('cityOutput');
let tempK = document.getElementById('temperatureOutputK');
let tempF = document.getElementById('temperatureOutputF');
let tempC = document.getElementById('temperatureOutputC');
let condition = document.getElementById('condition');

let results = {
  "coord": {
    "lon": -84.54,
    "lat": 38.04
  },
  "weather": [
    {
      "id": 803,
      "main": "Clouds",
      "description": "broken clouds",
      "icon": "04d"
    }
  ],
  "base": "stations",
  "main": {
    "temp": 301.5,
    "pressure": 1011,
    "humidity": 65,
    "temp_min": 301.15,
    "temp_max": 302.15
  },
  "visibility": 16093,
  "wind": {
    "speed": 5.7,
    "deg": 90,
    "gust": 10.3
  },
  "clouds": {
    "all": 75
  },
  "dt": 1527628500,
  "sys": {
    "type": 1,
    "id": 1138,
    "message": 0.0039,
    "country": "US",
    "sunrise": 1527589080,
    "sunset": 1527641627
  },
  "id": 420013336,
  "name": "Lexington",
  "cod": 200
}

//api.openweathermap.org/data/2.5/weather?zip={zip code},{country code}
//weatherURL = https://api.openweathermap.org/data/2.5/weather?zip=40504,us&appid=d710a4aa5b152e9b5fe7739a6ccca894


document.onreadystatechange = function() {
  if (document.readyState == "interactive") {

  weatherButton.onclick = getWeather;

  console.log(results);
  //console.log(results.name);
  //console.log(results.main.temp);
  //console.log(results.weather[0].description);
  }
};

//if results.cod = 200

function getWeather() {
  //alert("test function");
  cityOutput.innerHTML = results.name;
  tempK.innerHTML = Math.round(results.main.temp) + " K";
  tempF.innerHTML = convertKtoF(results.main.temp) + "&degF";
  tempC.innerHTML = convertKtoC(results.main.temp) + "&degC";
  condition.innerHTML = results.weather[0].description;

  output.style.display = "block";
}
//else if results.cod = 401

//elseif results.cod = 404


function convertKtoF(kelvin) {
  let fahr = kelvin * (9/5) - 459.7;
  return Math.round(fahr);
}

function convertKtoC(kelvin) {
  let celsius = kelvin - 273.15;
  return Math.round(celsius);
}



//if zip is good, output:
// 20180529174915
// https://api.openweathermap.org/data/2.5/weather?zip=40504,us&appid=d710a4aa5b152e9b5fe7739a6ccca894

//if zip is bad
// cod 404

//if api bad
//cod 401

// {
//   "coord": {
//     "lon": -84.54,
//     "lat": 38.04
//   },
//   "weather": [
//     {
//       "id": 803,
//       "main": "Clouds",
//       "description": "broken clouds",
//       "icon": "04d"
//     }
//   ],
//   "base": "stations",
//   "main": {
//     "temp": 301.5,
//     "pressure": 1011,
//     "humidity": 65,
//     "temp_min": 301.15,
//     "temp_max": 302.15
//   },
//   "visibility": 16093,
//   "wind": {
//     "speed": 5.7,
//     "deg": 90,
//     "gust": 10.3
//   },
//   "clouds": {
//     "all": 75
//   },
//   "dt": 1527628500,
//   "sys": {

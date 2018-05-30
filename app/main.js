//input form
let weatherButton = document.getElementById('weatherButton');
let apiId = "d710a4aa5b152e9b5fe7739a6ccca894"
let zipInput = "zipCode"

//output variables

let output = document.getElementById('output');
let cityOutput = document.getElementById('cityOutput');
let tempK = document.getElementById('temperatureOutputK');
let tempF = document.getElementById('temperatureOutputF');
let tempC = document.getElementById('temperatureOutputC');
let condition = document.getElementById('condition');

//error variables

let error = document.getElementById("error");



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

  // console.log(results);
  //console.log(results.name);
  //console.log(results.main.temp);
  //console.log(results.weather[0].description);
  }
};

//if results.cod = 200

var url = "https://api.openweathermap.org/data/2.5/weather?zip=<zipCode>,us&appid=<appId>"
url = url.replace("<zipCode>", zipInput.value);
url = url.replace("<appId>", appId);


function getWeather() {
//code that fetches API data and stores it in resuls

apiRequest = new XMLHttpREquest();
apiRequest.onload = catchResponse;
apiRequest.onerror = httpRequestOnError;
apiRequest.open('get', url, true);
apiRequest.send();






  output.style.display = "block";
}
//else if results.cod = 401

//elseif results.cod = 404

funtion catchRequestOnError() {
  //to do
  errorMessage.innerHTML = "There was a problem accessing the API. Try again Later"
  error.style.display = 'block';

}


function catchResponse() {
  // to do
  if (apiRequest.statusText === "OK"){

    let response = JSON.parse(apiRequest.responseText);

    error.style.display = "none";
    cityOutput.innerHTML = response.name;
    tempK.innerHTML = Math.round(response.main.temp) + " K";
    tempF.innerHTML = convertKtoF(response.main.temp) + "&degF";
    tempC.innerHTML = convertKtoC(response.main.temp) + "&degC";
    condition.innerHTML = response.weather[0].description;

  }
    else {
        error.style.display = 'block';
        errorMessage.innerHTML = apiRequest.statusText;
    }
  }


function convertKtoF(kelvin) {
  let fahr = kelvin * (9/5) - 459.7;
  return Math.round(fahr);
}

function convertKtoC(kelvin) {
  let celsius = kelvin - 273.15;
  return Math.round(celsius);
}

function displayImage(tempF) {
  if (tempF > 85) {
    weatherImage.src = "https:/goo.gl/c8VxVr";
  }
  else if (tempF > 65) {
    weatherImage.src = "https:/goo.gl/WNV85G";
  }
  else if (tempF > 32) {
    weatherImage.src = "https:/goo.gl/KAbVwR";
  }
  else {
    weatherImage.src = "https:/goo.gl/KAbVwR";
  }
}

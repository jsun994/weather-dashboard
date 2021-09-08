var userFormEl = document.querySelector("#user-form");
var inputEl = document.querySelector("#input");
var cityEl = document.querySelector("#city-name");
var recentEl = document.querySelector("#recent");

var key = "bd049a07fbe50fe7d3fdc4b706ec6bdf";
var storage = [];

var inputHandler = function(event) {
    event.preventDefault();

    var cityValue = inputEl.value.trim();

    if (cityValue) {
        //console.log(typeof(cityValue));
        cityEl.innerHTML = cityValue;
        apiCity(cityValue);
    } else {
        alert("Please enter a city!");
    }
};

//get city
var apiCity = function(city) {
    var weatherApi = "https://api.openweathermap.org/data/2.5/weather?q="
    + city + "&APPID=" + key;
  
    console.log(weatherApi);
    fetch(weatherApi).then(function(response) {
        console.log(response);
        if (response.ok) {
            response.json().then(function(data) {
                console.log(data);
            });
        } else {
            alert("Error: " + response.statusText);
        }
    });
};

userFormEl.addEventListener("submit", inputHandler);
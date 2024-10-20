const apiKey = "49813cabaf0f80df511472514a2c89f7";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";


const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon")

async function checkWeather(city) {
    const response = await fetch (apiUrl + city + `&appid=${apiKey}`);

    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
    }
    else {
        document.querySelector(".error").style.display = "none";
        var data = await response.json();

        // console.log(data);

        document.querySelector(".city").innerHTML = data.name + " , ";
        document.querySelector(".country").innerHTML = data.sys.country;
        document.querySelector(".citytemp").innerHTML = Math.round (data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + " %";
        document.querySelector(".wind").innerHTML = data.wind.speed + " Km/hr";
        document.querySelector(".air").innerHTML = data.main.pressure + " mb";
        document.querySelector(".Cloud").innerHTML = data.clouds.all + " %";

        if (data.weather[0].main == "Clouds"){
            weatherIcon.src = "images/clouds.png";
        }
        else if (data.weather[0].main == "Clear"){
            weatherIcon.src = "images/clear.png";
        }
        else if (data.weather[0].main == "Rain"){
            weatherIcon.src = "images/rain.png";
        }
        else if (data.weather[0].main == "Drizzle"){
            weatherIcon.src = "images/drizzle.png";
        }
        else if (data.weather[0].main == "Mist"){
            weatherIcon.src = "images/rain.png";
        }
    }
}

searchBtn.addEventListener("click" , () => {
    checkWeather(searchBox.value);
}) 

async function fetchWeatherData(cityName){
	let url =`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=a497f7ff2974e855df3dee5fb72c5f95`;
	const response=await fetch(url)
	const data=await response.json();
	let city = document.getElementById("city");
	city.innerHTML= data.name;
	let windSpeed = document.getElementById("wind_speed");
	windSpeed.innerHTML=data.wind.speed + "km/hr";
	let humidity = document.getElementById("humidity");
	humidity.innerHTML = data.main.humidity+" g/kg";
	let temp = document.getElementById("temp");
	temp.innerHTML = Math.round((data.main.temp)-273.15)+"°C";
	console.log(data);
	
}
// demo()
function fetchCity()
{
	let cityName = document.getElementById("city_name");
	if(cityName.value==="")
	{
		alert("Enter a city name");
	}
	else{
		fetchWeatherData(cityName.value);
		cityName.value="";
	}
}

// Listen for 'Enter' key press inside the input field
document.getElementById("cityInput").addEventListener("keydown", function(event) {
	if (event.key === "Enter") {
		fetchCity();
	}
});







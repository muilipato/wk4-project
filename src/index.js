const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '1ab5726860msh1964662156113f6p1d5559jsn4c21bbce5c1f',
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
	}
};

const getWeather = (city)=>{

  fetch(`https://weatherapi-com.p.rapidapi.com/forecast.json?q=${city}&days=3`, options)
	  .then(response => response.json())
  
	  .then(data => {
      console.log(data);
      document.getElementById("city-name").innerHTML=`${data.location.name}`;
      document.getElementById("temp").innerHTML = `${data.current.temp_c} °C`;
      document.getElementById("clouds").innerHTML=data.current.condition.text;
      document.querySelector(".cloud-icon").src =data.current.condition.icon;
      document.getElementById("wind").innerHTML =`Wind Speed: ${data.current.wind_kph} km/h`;
      precip
      pressure

    })
    
	  .catch(err => console.error(err));
   

 
}
document.getElementById("submit-search").addEventListener("click", function (){
  let searchingFor=document.getElementById("weather-search").value;
  getWeather(searchingFor);
})

 

/*
const API_KEY = '0a6fb4377e8f4853270b1861c18cfecd';
const location = 'New York';
const forecastDays = 3;

fetch(`https://api.weatherstack.com/current?access_key=${API_KEY}&query=${location}`)
  .then(response => response.json())
  .then(data => {
    // Do something with the data  
    console.log(data);
  })
  .catch(error => {
    // Handle errors
    console.error(error);
  });

fetch(`http://api.weatherstack.com/forecast?access_key=${API_KEY}&query=${location}&forecast_days=${forecastDays}`)
  .then(response => response.json())
  .then(data => {
    // Do something with the data
    console.log(data);
  })
  .catch(error => {
    // Handle errors
    console.error(error);
  });
*/
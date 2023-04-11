document.addEventListener("DOMContentLoaded", function(){
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
      document.getElementById("nbo").innerHTML=`${data.location.name}`;
      document.getElementById("nbo-temp").innerHTML = `${data.current.temp_c} °C`;
      document.getElementById("nbo-clouds").innerHTML=data.current.condition.text;
      document.querySelector(".nbo-cloud-icon").src =data.current.condition.icon;
      document.getElementById("nbo-wind").innerHTML =`Wind Speed: ${data.current.wind_kph} km/h`;
      
      
      let myCity=document.querySelector("#nbo");

      // Display additional information when a user hovers over the city name

      myCity.addEventListener('mouseover', ()=>{
        let description =document.createElement('p');
        description.setAttribute('id','description');
        description.textContent=`Country: ${data.location.country}, Last updated: ${data.location.localtime}`;
        myCity.appendChild(description);
    
      })
      //Remove the additional information when the cursor is moved elsewhere.
      myCity.addEventListener('mouseout',()=>{
        let description=document.querySelector('#description');
        description.setAttribute('id','description');
        myCity.removeChild(description);
      });
      

    })
    
	  .catch(err => console.error(err));
   

 
}
function displayWeather(){
  getWeather('Nairobi')
 
  
}
displayWeather();
const anyCity = (city)=>{

  fetch(`https://weatherapi-com.p.rapidapi.com/forecast.json?q=${city}&days=3`, options)
	  .then(response => response.json())
  
	  .then(data => {
      console.log(data);
      document.getElementById("city-name").innerHTML=`${data.location.name}`;
      document.getElementById("temp").innerHTML = `${data.current.temp_c} °C`;
      document.getElementById("clouds").innerHTML=data.current.condition.text;
      document.querySelector(".cloud-icon").src =data.current.condition.icon;
      document.getElementById("wind").innerHTML =`Wind Speed: ${data.current.wind_kph} km/h`;
      
      let myCity=document.querySelector("#city-name");

      // Display additional information when a user hovers over the city name

      myCity.addEventListener('mouseover', ()=>{
        let description =document.createElement('p');
        description.setAttribute('id','city-description');
        description.textContent=`Country: ${data.location.country}, Last updated: ${data.location.localtime}`;
        myCity.appendChild(description);
    
      })
      //Remove the additional information when the cursor is moved elsewhere.
      myCity.addEventListener('mouseout',()=>{
        let description=document.querySelector('#city-description');
        description.setAttribute('id','city-description');
        myCity.removeChild(description);
      });
      
      

    })
    
	  .catch(err => console.error(err));
   

 
}


document.getElementById("submit-search").addEventListener("click", function (){
  let searchingFor=document.getElementById("weather-search").value;
  anyCity(searchingFor);
}) 

function majorCities(columnId,city){
  fetch(`https://weatherapi-com.p.rapidapi.com/forecast.json?q=${city}&days=3`, options)
	  .then(response => response.json())
  
	  .then(data => {
      let column=document.querySelector(`.${columnId}`)
      container = column.querySelector(".myCities");
      container.querySelector("#city-name").innerHTML=`${data.location.name}`;
      container.querySelector("#temp").innerHTML = `${data.current.temp_c} °C`;

      let clouds_container = container.querySelector("#cloud-cover");
      clouds_container.querySelector("#clouds").innerHTML=data.current.condition.text;
      clouds_container.querySelector(".cloud-icon").src =data.current.condition.icon;
      container.querySelector("#wind").innerHTML =`Wind Speed: ${data.current.wind_kph} km/h`;
     
     
      let majorCity = container.querySelector("#city-name");
      // Display additional information when a user hovers over the city name

      majorCity.addEventListener('mouseover', ()=>{
        let description =document.createElement('p');
        description.setAttribute('id','city-description');
        description.textContent=`Country: ${data.location.country}, Last updated: ${data.location.localtime}`;
        majorCity.appendChild(description);
    
      })
      //Remove the additional information when the cursor is moved elsewhere.
      majorCity.addEventListener('mouseout',()=>{
        let description=document.querySelector('#city-description');
        description.setAttribute('id','city-description');
        majorCity.removeChild(description);
      });
      
    })
    
	  .catch(err => console.error(err));
   

}
majorCities("city1","Tokyo");
majorCities("city2","New York");
majorCities("city3","London");
});
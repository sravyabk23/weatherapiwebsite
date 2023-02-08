var button=document.querySelector('.button');
var inputValue=document.querySelector('.inputValue');
let wealth=document.getElementById('wealth');
let wlth=document.getElementById('wlth');
var name1=document.querySelector('.name1');
var desc=document.querySelector('.desc');
var temp=document.querySelector('.temp');
//var wealth=document.querySelector('.wealth');
var humidity=document.querySelector('.humidity');
var icon=document.querySelector('.icon');
// var day1temp=document.querySelector('.day1temp');

var name0=document.querySelector('.name0');
var desc0=document.querySelector('.desc0');
var temp0=document.querySelector('.temp0');
var humidity0=document.querySelector('.humidity0');
var icon0=document.querySelector('.icon0');

let long;
let lat;
if(navigator.geolocation)
{
  navigator.geolocation.getCurrentPosition((position)=>
  {
    long=position.coords.longitude;
  lat=position.coords.latitude;
  const api=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=5683a3cbcabf35956444f80fd92271f3`
  fetch(api).then((response) =>{
    return response.json();
  })
  .then(data => {
    var nameValue0=data['name'];
    var tempValue0= data['main']['temp'];
    var humidityValue0 = data['main']['humidity'];
    var descValue0=data['weather'][0]['description'];
    name0.innerHTML=nameValue0;
    temp0.innerHTML=(Math.round(tempValue0-273)+"&#176c");
    desc0.innerHTML=descValue0;
    humidity0.innerHTML=humidityValue0;
    const{name}=data;
    const{feels_like}=data.main;
    const{id,main}=data.weather[0];
    
    
    if (id <300 && id>200){
      wlth.src="./static/thunder.svg";
    }
    else if (id>800){
      wlth.src="./static/cloudy.svg";
    }


    else if (id <600 && id>500){
      wlth.src="./static/rainy-1.svg";
    }
    else if (id<700 && id>600){
      wlth.src="./static/snow.svg";
    }

  else if (id>700 && id<=800){
    wlth.src="./static/day.svg";
  }

    

  })

})
}
button.addEventListener('click',function(){
   fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=5683a3cbcabf35956444f80fd92271f3')
  .then(response => response.json())
  // .then(data => console.log(data))
  .then(data => {
    if (data?.cod!=404){
      console.log(data);
      var nameValue=data['name'];
    var tempValue= data['main']['temp'];
    var humidityValue = data['main']['humidity'];
    var descValue=data['weather'][0]['main'];
    const{name}=data;
    const{feels_like}=data.main;
    const{id,main}=data.weather[0];
    var ic= data['weather'][0]['id'];
    name1.innerHTML=nameValue;
    temp.innerHTML=(Math.round(tempValue-273)+"&#176c");
    desc.innerHTML=descValue;
    humidity.innerHTML=humidityValue;
    if (id <300 && id>200){
      wealth.src="./static/thunder.svg";
    }
    else if (id>800){
      wealth.src="./static/cloudy.svg";
    }


    else if (id <600 && id>500){
      wealth.src="./static/rainy-1.svg";
    }
    else if (id<700 && id>600){
      wealth.src="./static/snow.svg";
    }

  else if (id>700 && id<=800){
    wealth.src="./static/day.svg";
  }

    
    }
    else{
  

      desc.innerHTML="<span style='color:red; font-size:40px;'>Its not a city!</span>"
    }
    

  })
  fetch('http://api.openweathermap.org/data/2.5/forecast?q='+inputValue.value+'&appid=8a978d4540278d49257556c54613d0bc')
.then(response => response.json())
.then(data =>{
    document.getElementById("day1temp").innerHTML=(Math.round(data.list[0].main.temp)-273)+"&#176c";
    document.getElementById("day1desc").innerHTML=data.list[0].dt_txt;
    document.getElementById("day1cli").innerHTML=data?.list[0]?.weather[0]?.main;
    document.getElementById("day2temp").innerHTML=(Math.round(data.list[8].main.temp)-273)+"&#176c";
    document.getElementById("day2desc").innerHTML=data.list[8].dt_txt;
    document.getElementById("day2cli").innerHTML=data.list[8].weather[0].main;
    document.getElementById("day3temp").innerHTML=(Math.round(data.list[16].main.temp)-273)+"&#176c";
    document.getElementById("day3desc").innerHTML=data.list[16].dt_txt;
    document.getElementById("day3cli").innerHTML=data.list[16].weather[0].main;
    document.getElementById("day4temp").innerHTML=(Math.round(data.list[24].main.temp)-273)+"&#176c";
    document.getElementById("day4desc").innerHTML=data.list[24].dt_txt;
    document.getElementById("day4cli").innerHTML=data.list[24].weather[0].main;
    document.getElementById("day5temp").innerHTML=(Math.round(data.list[32].main.temp)-273)+"&#176c";
    document.getElementById("day5desc").innerHTML=data.list[32].dt_txt;
    document.getElementById("day5cli").innerHTML=data.list[32].weather[0].main;

  console.log(data);
})

  
})

let result = document.getElementById("result");
let searchBtn = document.getElementById("search-btn")
let cityRef = document.getElementById("city")

searchBtn.addEventListener("click", getWeather =() =>{
    let cityValue = cityRef.value;
    if (cityValue.length  == 0){
        result.innerHTML="please input a city name";
    }
    else{
    let key = "a4a2827e088ffe2d9d175eda9f1a4a2e";
    let url =`https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${key}&units=metric`
    fetch(url)
    .then((response)=> {return response.json()})
    .then((data)=>{
        console.log(data)
        console.log(data.weather[0].icon)
        console.log(data.weather[0].main)
        console.log(data.weather[0].description)
        console.log(data.name)
        console.log(data.main)
        console.log(data.main.temp_min)
        console.log(data.main.temp_max)
        result.innerHTML=`<h2 style="padding-top:10px;letter-spacing:0.2em;">${data.name}</h2>
        <h4>${data.weather[0].main}</h4>
        <h4>${data.weather[0].description}</h4>
        <img src="https://openweathermap.org/img/w/${data.weather[0].icon}.png">
        <h1 style="color:yellow;">${data.main.temp} &#176; </h1>
        <div class="temp-container">
            <div>
                <h4 class="title1">min</h4>
                <h4 class="temp">${data.main.temp_min}</h4>
            </div>
            <div>
                <h4 class="title2">max</h4>
                <h4 class="temp">${data.main.temp_max}</h4>
            </div>
        </div>`
    })
    .catch(()=>{
        result.innerHTML= "City not found"
    })
    }
})

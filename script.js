let mykey = "875430cf09c107a97afad9420e0d05b2";
let btn = document.querySelector('.search-btn');
let input = document.querySelector('.input');

btn.onclick = function(){
    if(input.value == ''){
        alert("Please Enter a Location")
    }else{

        
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&units=metric&appid=${mykey}`).then(Response => Response.json()).then
        (json => {
            if(json.cod == '404'){
                document.querySelector('.container').style.height = '380px';
                document.getElementById('img').src = '/404.png';
                document.getElementById('img').style.width = '200px';
                document.getElementById('img').style.height = '200px';
                document.querySelector('.cityname').textContent = '';
                document.querySelector('.weath').innerHTML = 'Invalid Location';
                document.querySelector('.weath').style.color = 'royalblue';
                
            }else{
                  
                switch(json.weather[0].main){
                    case 'Clear':
                        document.getElementById('img').src = '/clear.png';
                        document.getElementById('img').style.marginTop = '0px';
                        break;
                        
                        case 'Rain':
                        document.getElementById('img').src = '/rain.png';
                        break;
                        case 'Snow':
                        document.getElementById('img').src = '/snow.png';
                        break;
                        case 'Clouds':
                        document.getElementById('img').src = 'cloud.png';
                        break;
                        case 'Haze':
                        document.getElementById('img').src = '/haze.png';
                        break;
                }
                console.log(json)
                document.querySelector('.container').style.height = '540px';
                document.querySelector('.cityname').textContent = json.weather[0].main;
                document.querySelector('.deg').textContent = Math.trunc(json.main.temp);
                document.querySelector('.umid').textContent = Math.trunc(json.main.humidity) + '%';
                document.querySelector('.speed').textContent = Math.trunc(json.wind.speed) + 'Km/h';
            }
           
        })
    }
}
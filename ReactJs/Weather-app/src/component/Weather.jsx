import React, { useEffect,useState} from 'react'
import './Weather.css'

const Weather = () => {

  const[Weathetdata,setWeatherdata] = useState(false)

  const [cityname,setCityname]= useState("ahmedabad")

  // const allIcons = {
  //   "01d":clear.png,
  //   "01n":clear.png,
  //   "02d":clouds.png,
  //   "02n":clouds.png,
  //   "03d":clouds.png,
  //   "03n":clouds.png,
  //   "04d":drizzle.png,
  //   "04n":drizzle.png,
  //   "09d":rain.png,
  //   "09n":rain.png,
  //   "010d":rain.png,
  //   "010n":rain.png,
  //   "013d":snow.png,
  //   "013n":snow.png
    
  // }

  const search = async (city)=> {

    if(city===""){
      alert("Enter a city name")
      return;
    }

    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${import.meta.env.VITE_APP_ID}`
      const response = await fetch(url)
      const data = await response.json()
      console.log(data);

      setWeatherdata({
        humidity:data.main.humidity,
        windSpeed:data.wind.speed,
        temperature: Math.floor(data.main.temp),
        location: data.name,
        icon:data.weather[0].icon
        // icon:allIcons[data.weather[0].icon]
      })
      
      
    } catch (error) {
      console.log("Error",error);
      
    }
    
  }

    useEffect(()=>{
      search(cityname)
  
    },[])               // when we give dependency state cityname 

  return (
    <div>
      <div className='weather'>
        <div className="search">
          <input type="text" placeholder='Search' onChange={(e)=>setCityname(e.target.value)}/>
          <img src="search.png" alt="" onClick={()=>{search(cityname)}}/>
        </div>

        <div className='temp'>
          <img src={`https://openweathermap.org/img/wn/${Weathetdata.icon}@2x.png`} alt="" />
          <p>{Weathetdata.temperature}<sup>o</sup>C</p>
          <p>{Weathetdata.location}</p>
        </div>

        <div className='details'>
          <div className='humidity'>
            <img src="humidity.png" alt="" />
            <div>
              <p>{Weathetdata.humidity}%</p>
              <p>Humidity</p>
            </div>
          </div>

          <div className='wind-speed'>
            <img src="wind.png" alt="" />
            <div>
              <p>{Weathetdata.windSpeed}km/h</p>
              <p>Wind speed</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Weather

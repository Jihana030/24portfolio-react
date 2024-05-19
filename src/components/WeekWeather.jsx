import React, { useEffect, useState } from "react";

function WeekWeather(){
  const [weather, setWeather] = useState(null);
  const getWeather = async(lat,lon) =>{
    try{
      const apiKey = process.env.REACT_APP_WEATHER_KEY;
      const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&lang=kr&appid=${apiKey}`;
      const response = await fetch(url);
      const data = await response.json();
      setWeather(data);
    }
    catch(err) {
      console.error(err);
    }
  }
  useEffect(() => {
    const getCurrentLocation = () => {
      navigator.geolocation.getCurrentPosition((position) => {
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;
        getWeather(lat, lon);
      })
    }
    getCurrentLocation();
  },[]);
  return  (
    <div id="weekWeather">
      <div>{weather.weather[0].description}</div>
    </div>
  )
}

export default WeekWeather;
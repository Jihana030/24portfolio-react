import axios from "axios";
import React, { useEffect, useState } from "react";

function TodayWeather() {
  const [weather, setWeather] = useState('');
  const apiKey = process.env.REACT_APP_WEATHER_KEY;
  const getWeather=async(lat,lon)=>{
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&lang=kr&appid=${apiKey}`;
    await axios.get(url).then((response)=>{
      const data = response.data;
      setWeather(data)
    })
  }
  let temp = Math.round(weather.temp - 273.15);
  // icon
  const weatherIcon = weather.weather[0].icon;
  const weatherIconAdrs =  `http://openweathermap.org/img/wn/${weatherIcon}@2x.png`;
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
  return (
    <div id="weatherBox">
      <div><img src={weatherIconAdrs} alt="weatherIcon" /></div>
      <div>{weather.name}</div>
      <div>{temp}℃</div>
      <div>{weather.weather[0].description}</div>
    </div>
  );
}

export default TodayWeather;

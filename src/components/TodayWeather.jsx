import React, { useEffect, useState } from "react";

function TodayWeather() {
  const [weather, setWeather] = useState(null);
  
  const getWeather = async (lat, lon) => {
    const apiKey = process.env.REACT_APP_WEATHER_KEY;
    try{
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&lang=kr&appid=${apiKey}`;
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
  const temp = Math.round(weather.main.temp - 273.15);
  // icon
  const weatherIcon = weather.weather[0].icon;
  const weatherIconAdrs =  `http://openweathermap.org/img/wn/${weatherIcon}@2x.png`;
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

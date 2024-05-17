import { useEffect, useState } from "react";
import WeatherBox from "./WeatherBox";

function Weather() {
  const [weather, setWeather] = useState(null);
  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;
        getWeather(lat, lon);
      })
    } 
  }
  const getWeather = async (lat, lon) => {
    const apiKey = process.env.REACT_APP_WEATHER_KEY;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;
    const response = await fetch(url);
    const data = await response.json();
    setWeather(data);
  }
  useEffect(() => {
    getCurrentLocation();
  }, []);

  return (
    <WeatherBox weather={ weather } />
  )
}

export default Weather;
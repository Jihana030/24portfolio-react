import React from "react";
import TodayWeather from "./TodayWeather";
import { useLightMode } from "./ModeContext";
import WeekWeather from "./WeekWeather";
import WeatherDaytime from "./WeatherDaytime";

function Weather() {
  const { isLightMode } = useLightMode();
  return (
    <div id="weather" className={isLightMode ? "light" : "dark"}>
      <TodayWeather />
      <div className="longWeather">
        <WeatherDaytime />
        <WeekWeather />
      </div>
    </div>
  );
}

export default Weather;

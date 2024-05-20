import React from "react";
import TodayWeather from "./TodayWeather";
import { useLightMode } from "./ModeContext";
import WeekWeather from "./WeekWeather";
import WeatherDaytime from "./WeatherDaytime";

function Weather() {
  const { isLightMode } = useLightMode();
  const day = new Date();
  const formatDate = `${day.getFullYear()}년 ${day.getMonth() + 1}월 ${day.getDate()}일`;
  return (
    <div id="weather" className={isLightMode ? "light" : "dark"}>
      <div className="formatDate">{formatDate}</div>
      <div className="weatherWrap">
        <TodayWeather />
        <div className="longWeather">
          <WeatherDaytime />
          <WeekWeather />
        </div>
      </div>
    </div>
  );
}

export default Weather;

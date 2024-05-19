import React from "react";
import TodayWeather from "./TodayWeather";
import { useLightMode } from "./ModeContext";
// import WeekWeather from "./WeekWeather";

function Weather() {
  const { isLightMode } = useLightMode();
  return (
    <div id="weather" className={isLightMode ? "light" : "dark"}>
      <TodayWeather />
      {/* <WeekWeather/> */}
    </div>
  )
}

export default Weather;
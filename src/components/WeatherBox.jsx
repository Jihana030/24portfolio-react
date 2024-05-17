function WeatherBox({ weather }) {
  return (
    <div id="weatherBox">
      <div>{weather?.name}</div>
      <div>{weather?.main.temp}</div>
      <div>{weather?.weather[0].description}</div>
    </div>
  );
}

export default WeatherBox;

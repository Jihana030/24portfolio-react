import axios from "axios";
import React from "react";

class TodayWeather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      temp: 0,
      temp_max: 0,
      temp_min: 0,
      humidity: 0,
      desc: "",
      icon: "",
      loading: true,
    };
  }
  componentDidMount() {
    const apiKey = process.env.REACT_APP_WEATHER_KEY;
    // const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&lang=kr&appid=${apiKey}`;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=Incheon&lang=kr&appid=${apiKey}`;
    axios
      .get(url)
      .then((response) => {
        const data = response.data;
        this.setState({
          temp: Math.round(data.main.temp - 273.15),
          temp_max: Math.round(data.main.temp_max - 273.15),
          temp_min: Math.round(data.main.temp_min - 273.15),
          desc: data.weather[0].description,
          icon: data.weather[0].icon,
          loading: false,
        });
      })
      .catch((err) => console.error(err));
  }
  render() {
    const weatherIconAdrs = `http://openweathermap.org/img/wn/${this.state.icon}@2x.png`;
    if (this.state.loading) {
      return <p>Loading</p>;
    } else {
      return (
        <div id="weatherBox">
          <div>
            <img src={weatherIconAdrs} alt="weatherIcon" />
          </div>
          <div>{}</div>
          <div>{this.state.temp}℃</div>
          <div>{this.state.desc}</div>
        </div>
      );
    }
  }
}

export default TodayWeather;

import axios from "axios";
import React from "react";

class WeekWeather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      temp: 0,
      desc: "",
      icon: "",
      loading: true,
    };
  }
  componentDidMount() {
    const apiKey = process.env.REACT_APP_WEATHER_KEY;
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=Incheon&lang=kr&appid=${apiKey}`;
    axios
      .get(url)
      .then((response) => {
        const list = response.data.list;
        console.log(list)
        this.setState({
          loading: false,
          oneday: list[2].dt_txt.slice(5,10).replace("-", "."),
          onetemp: Math.round(list[2].main.temp - 273.15),
          onedesc: list[2].weather[0].description,
          oneicon: list[2].weather[0].icon,
          twoday: list[10].dt_txt.slice(5,10).replace("-", "."),
          twotemp: Math.round(list[10].main.temp - 273.15),
          twodesc: list[10].weather[0].description,
          twoicon: list[10].weather[0].icon,
          threeday: list[18].dt_txt.slice(5,10).replace("-", "."),
          threetemp: Math.round(list[18].main.temp - 273.15),
          threedesc: list[18].weather[0].description,
          threeicon: list[18].weather[0].icon,
          fourday: list[26].dt_txt.slice(5,10).replace("-", "."),
          fourtemp: Math.round(list[26].main.temp - 273.15),
          fourdesc: list[26].weather[0].description,
          fouricon: list[26].weather[0].icon,
          fiveday: list[34].dt_txt.slice(5,10).replace("-", "."),
          fivetemp: Math.round(list[34].main.temp - 273.15),
          fivedesc: list[34].weather[0].description,
          fiveicon: list[32].weather[0].icon,
        });
      })
      .catch((err) => console.error(err));
  }
  render() {
    const weatherIconAdrs=(day) => `http://openweathermap.org/img/wn/${day}@2x.png`;
    if (this.state.loading) {
      return <p>Loading</p>;
    } else {
      return (
        <div id="weekWeatherBox">
          <div>
            <div>
              <img src={weatherIconAdrs(this.state.oneicon)} alt="weatherIcon" />
            </div>
            <div>{this.state.oneday}</div>
            <div>{this.state.onetemp}℃</div>
            <div>{this.state.onedesc}</div>
          </div>
          <div>
            <div>
              <img src={weatherIconAdrs(this.state.twoicon)} alt="weatherIcon" />
            </div>
            <div>{this.state.twoday}</div>
            <div>{this.state.twotemp}℃</div>
            <div>{this.state.twodesc}</div>
          </div>
          <div>
            <div>
              <img src={weatherIconAdrs(this.state.threeicon)} alt="weatherIcon" />
            </div>
            <div>{this.state.threeday}</div>
            <div>{this.state.threetemp}℃</div>
            <div>{this.state.threedesc}</div>
          </div>
          <div>
            <div>
              <img src={weatherIconAdrs(this.state.fouricon)} alt="weatherIcon" />
            </div>
            <div>{this.state.fourday}</div>
            <div>{this.state.fourtemp}℃</div>
            <div>{this.state.fourdesc}</div>
          </div>
          <div>
            <div>
              <img src={weatherIconAdrs(this.state.fiveicon)} alt="weatherIcon" />
            </div>
            <div>{this.state.fiveday}</div>
            <div>{this.state.fivetemp}℃</div>
            <div>{this.state.fivedesc}</div>
          </div>
        </div>
      );
    }
  }
}

export default WeekWeather;

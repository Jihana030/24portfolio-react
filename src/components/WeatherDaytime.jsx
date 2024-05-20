import axios from "axios";
import React from "react";

class WeatherDaytime extends React.Component {
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
        this.setState({
          loading: false,
          onetime: list[0].dt_txt.slice(10).slice(0, 3),
          onetemp: Math.round(list[0].main.temp - 273.15),
          onedesc: list[0].weather[0].description,
          oneicon: list[0].weather[0].icon,
          twotime: list[1].dt_txt.slice(10).slice(0, 3),
          twotemp: Math.round(list[1].main.temp - 273.15),
          twodesc: list[1].weather[0].description,
          twoicon: list[1].weather[0].icon,
          threetime: list[2].dt_txt.slice(10).slice(0, 3),
          threetemp: Math.round(list[2].main.temp - 273.15),
          threedesc: list[2].weather[0].description,
          threeicon: list[2].weather[0].icon,
          fourtime: list[3].dt_txt.slice(10).slice(0, 3),
          fourtemp: Math.round(list[3].main.temp - 273.15),
          fourdesc: list[3].weather[0].description,
          fouricon: list[3].weather[0].icon,
          fivetime: list[4].dt_txt.slice(10).slice(0, 3),
          fivetemp: Math.round(list[4].main.temp - 273.15),
          fivedesc: list[4].weather[0].description,
          fiveicon: list[4].weather[0].icon,
          sixtime: list[5].dt_txt.slice(10).slice(0, 3),
          sixtemp: Math.round(list[5].main.temp - 273.15),
          sixdesc: list[5].weather[0].description,
          sixicon: list[5].weather[0].icon,
        });
      })
      .catch((err) => console.error(err));
  }
  render() {
    const weatherIconAdrs = (day) => `http://openweathermap.org/img/wn/${day}@2x.png`;
    if (this.state.loading) {
      return <p>Loading</p>;
    } else {
      return (
        <div id="weekWeatherBox">
          <div>
            <div>
              <img src={weatherIconAdrs(this.state.oneicon)} alt="weatherIcon" />
            </div>
            <div>{this.state.onetime}시</div>
            <div>{this.state.onetemp}℃</div>
            <div>{this.state.onedesc}</div>
          </div>
          <div>
            <div>
              <img src={weatherIconAdrs(this.state.twoicon)} alt="weatherIcon" />
            </div>
            <div>{this.state.twotime}시</div>
            <div>{this.state.twotemp}℃</div>
            <div>{this.state.twodesc}</div>
          </div>
          <div>
            <div>
              <img src={weatherIconAdrs(this.state.threeicon)} alt="weatherIcon" />
            </div>
            <div>{this.state.threetime}시</div>
            <div>{this.state.threetemp}℃</div>
            <div>{this.state.threedesc}</div>
          </div>
          <div>
            <div>
              <img src={weatherIconAdrs(this.state.fouricon)} alt="weatherIcon" />
            </div>
            <div>{this.state.fourtime}시</div>
            <div>{this.state.fourtemp}℃</div>
            <div>{this.state.fourdesc}</div>
          </div>
          <div>
            <div>
              <img src={weatherIconAdrs(this.state.fiveicon)} alt="weatherIcon" />
            </div>
            <div>{this.state.fivetime}시</div>
            <div>{this.state.fivetemp}℃</div>
            <div>{this.state.fivedesc}</div>
          </div>
          <div>
            <div>
              <img src={weatherIconAdrs(this.state.fiveicon)} alt="weatherIcon" />
            </div>
            <div>{this.state.sixtime}시</div>
            <div>{this.state.sixtemp}℃</div>
            <div>{this.state.sixdesc}</div>
          </div>
        </div>
      );
    }
  }
}

export default WeatherDaytime;

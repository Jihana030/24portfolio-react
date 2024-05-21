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
      const stateDay = (n) => list[n].dt_txt.slice(5, 10).replace("-", ".");
      const stateTemp = (n) => Math.round(list[n].main.temp - 273.15);
      const stateDesc = (n) => list[n].weather[0].description;
      const stateIcon = (n) => list[n].weather[0].icon;
        this.setState({
          loading: false,
          oneday: stateDay(2),
          onetemp: stateTemp(2),
          onedesc: stateDesc(2),
          oneicon: stateIcon(2),
          twoday: stateDay(10),
          twotemp: stateTemp(10),
          twodesc: stateDesc(10),
          twoicon: stateIcon(10),
          threeday: stateDay(18),
          threetemp: stateTemp(18),
          threedesc: stateDesc(18),
          threeicon: stateIcon(18),
          fourday: stateDay(26),
          fourtemp: stateTemp(26),
          fourdesc: stateDesc(26),
          fouricon: stateIcon(26),
          fiveday: stateDay(34),
          fivetemp: stateTemp(34),
          fivedesc: stateDesc(34),
          fiveicon: stateIcon(34),
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

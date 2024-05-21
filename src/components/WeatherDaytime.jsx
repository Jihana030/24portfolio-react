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
        const stateTime = (n) => list[n].dt_txt.slice(10).slice(0, 3);
        const stateTemp = (n) => Math.round(list[n].main.temp - 273.15);
        const stateDesc = (n) => list[n].weather[0].description;
        const stateIcon = (n) => list[n].weather[0].icon;
        this.setState({
          loading: false,
          onetime: stateTime(0),
          onetemp: stateTemp(0),
          onedesc: stateDesc(0),
          oneicon: stateIcon(0),
          twotime: stateTime(1),
          twotemp: stateTemp(1),
          twodesc: stateDesc(1),
          twoicon: stateIcon(1),
          threetime: stateTime(2),
          threetemp: stateTemp(2),
          threedesc: stateDesc(2),
          threeicon: stateIcon(2),
          fourtime: stateTime(3),
          fourtemp: stateTemp(3),
          fourdesc: stateDesc(3),
          fouricon: stateIcon(3),
          fivetime: stateTime(4),
          fivetemp: stateTemp(4),
          fivedesc: stateDesc(4),
          fiveicon: stateIcon(4),
          sixtime: stateTime(5),
          sixtemp: stateTemp(5),
          sixdesc: stateDesc(5),
          sixicon: stateIcon(5),
          seventime: stateTime(6),
          seventemp: stateTemp(6),
          sevendesc: stateDesc(6),
          sevenicon: stateIcon(6),
          eighttime: stateTime(7),
          eighttemp: stateTemp(7),
          eightdesc: stateDesc(7),
          eighticon: stateIcon(7),
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
              <img src={weatherIconAdrs(this.state.sixicon)} alt="weatherIcon" />
            </div>
            <div>{this.state.sixtime}시</div>
            <div>{this.state.sixtemp}℃</div>
            <div>{this.state.sixdesc}</div>
          </div>
          <div>
            <div>
              <img src={weatherIconAdrs(this.state.sevenicon)} alt="weatherIcon" />
            </div>
            <div>{this.state.seventime}시</div>
            <div>{this.state.seventemp}℃</div>
            <div>{this.state.sevendesc}</div>
          </div>
          <div>
            <div>
              <img src={weatherIconAdrs(this.state.eighticon)} alt="weatherIcon" />
            </div>
            <div>{this.state.eighttime}시</div>
            <div>{this.state.eighttemp}℃</div>
            <div>{this.state.eightdesc}</div>
          </div>
        </div>
      );
    }
  }
}

export default WeatherDaytime;

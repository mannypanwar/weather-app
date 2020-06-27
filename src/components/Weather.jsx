import React from "react";

export default function Weather(props) {
  let ico = "10d";
  if (props.clicked === true) {
    ico = props.weather.weather[0].icon;
  }
  let icoLink = `http://openweathermap.org/img/wn/${ico}@2x.png`;

  return (
    <section className="weather">
      <div className="weather-card">
        <h1 className="text-shadow">
          {props.clicked ? props.weather.name : null}
        </h1>
        <h3 className="text-shadow">
          {props.clicked ? props.weather.weather[0].main : null}
        </h3>
        <div className="temp">
          {props.clicked && (
            <img className="img-shadow" src={icoLink} alt="weather-icon" />
          )}
          <h1 className="text-shadow">
            {props.clicked ? props.weather.main.temp + "°" : null}
          </h1>
        </div>
        <div
          className="other-temp"
          style={{ display: props.clicked ? "flex" : "none" }}
        >
          <div className="max-min">
            <h4> Max</h4>
            <p>
              <i className="fas fa-temperature-high"> </i>
              {props.clicked ? " " + props.weather.main.temp_max + "°" : null}
            </p>
          </div>
          <div className="max-min">
            <h4> Min</h4>
            <p>
              <i className="fas fa-temperature-low"> </i>
              {props.clicked ? " " + props.weather.main.temp_min + "°" : null}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

import React from "react";
import { Controls, PlayState, Tween } from "react-gsap";

export default function Weather(props) {
  let ico = "10d";
  if (props.clicked === true) {
    ico = props.weather.weather[0].icon;
  }
  let icoLink = `http://openweathermap.org/img/wn/${ico}@2x.png`;

  return (
    // <Controls playState={PlayState.stop}>
    <Tween
      from={{
        opacity: 0,
        scale: 0.3,

        delay: 0.5,
      }}
      duration={1}
      ease="back"
    >
      <div className="weather-card">
        <Tween from={{ y: "-20px", opacity: 0 }} stagger={0.2} delay={1.5}>
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
        </Tween>
      </div>
    </Tween>
    // </Controls>
  );
}

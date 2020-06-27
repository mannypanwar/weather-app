import React, { useState, useEffect } from "react";
import Weather from "./Weather";

export default function Search() {
  const [text, changeText] = useState("");
  const [weather, setWeather] = useState("");
  const [clicked, setClicked] = useState(false);

  function search(event) {
    changeText(event.target.value);
  }

  function btnPress(event) {
    function weatherBalloon(name) {
      var key = "fca9e4a88009eda3bc59b644ad4b92b0";
      fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=" +
          name +
          "&appid=" +
          key +
          "&units=metric"
      )
        .then(function (resp) {
          return resp.json();
        }) // Convert data to json
        .then(function (data) {
          setWeather(data);
          setClicked(true);
        })
        .catch(function (err) {
          console.log(err);
        });
    }

    weatherBalloon(text);
    event.preventDefault();
  }

  return (
    <>
      <section className="search">
        <form action="">
          <div className="search-bar">
            <input
              onChange={search}
              className="form-control"
              placeholder="City name"
            />
            <span className="input-group-btn">
              <button onClick={btnPress} className="btn">
                <i className="fas fa-search " />
              </button>
            </span>
          </div>
        </form>
      </section>
      <Weather weather={weather} clicked={clicked} />
    </>
  );
}

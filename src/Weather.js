import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import FormattedDate from "./FormattedDate";

export default function Weather() {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: Math.round(response.data.temperature.current),
      city: response.data.city,
      country: response.data.country,
      date: new Date(response.data.time * 1000),
      condition: response.data.condition.description,
      feelslike: Math.round(response.data.temperature.feels_like),
      humidity: response.data.temperature.humidity,
      wind: Math.round(response.data.wind.speed),
      alternative: response.data.condition.description,
      iconUrl: response.data.condition.icon_url,
    });
  }
  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-md-10 mb-2 mb-md-0">
              <input
                type="search"
                placeholder="Enter a city.."
                className="form-control"
                autoFocus="on"
              />
            </div>
            <div className="col-md-2">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
        <div className="row">
          <div className="col-md-4 text-center">
            <img src={weatherData.iconUrl} alt={weatherData.alternative} />
            <span className="temperature">{weatherData.temperature}</span>
            <span className="unit">°C</span>
          </div>
          <div className="col-md-4 text-center mt-3 mt-md-0">
            <h1>{weatherData.city},</h1>
            <h4>{weatherData.country}</h4>
            <ul>
              <li>
                <FormattedDate date={weatherData.date} />
              </li>
              <li className="text-capitalize">{weatherData.condition}</li>
            </ul>
          </div>
          <div className="col-md-4 text-center mt-3 mt-md-0 conditions">
            <ul>
              <li>
                <span className="strong">Feels like: </span>
                {weatherData.feelslike}°C
              </li>
              <li>
                <span className="strong">Humidity:</span> {weatherData.humidity}
                %
              </li>
              <li>
                <span className="strong">Wind: </span> {weatherData.wind}km/h
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "8ba95f6fb30o9e342ftad41e6513023b";
    let city = "New York";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading...";
  }
}

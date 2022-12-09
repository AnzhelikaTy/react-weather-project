import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-3"></div>
          <div className="col-4">
            <input
              type="search"
              placeholder="Enter a city.."
              className="form-control"
              autoFocus="on"
            />
          </div>
          <div className="col-3">
            <input type="submit" value="Search" className="btn btn-primary" />
          </div>
        </div>
      </form>
      <div className="row">
        <div className="col-2">
          <img
            src="https://ssl.gstatic.com/onebox/weather/48/partly_cloudy.png"
            alt="Mostly Cloudy"
          />
          6°C
        </div>
        <div className="col-4">
          <ul>
            <li>Precipitation: 1%</li>
            <li>Humidity: 59%</li>
            <li>Wind: 11km/h</li>
          </ul>
        </div>
        <div className="col-3"></div>
        <div className="col-3">
          <h3>New York, USA</h3>
          <ul>
            <li>Friday 19:00</li>
            <li>Mostly Cloudy</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

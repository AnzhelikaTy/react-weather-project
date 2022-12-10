import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-md-6 mb-2 mb-md-0">
            <input
              type="search"
              placeholder="Enter a city.."
              className="form-control"
              autoFocus="on"
            />
          </div>
          <div className="col-md-6">
            <input type="submit" value="Search" className="btn btn-primary" />
          </div>
        </div>
      </form>
      <div className="row">
        <div className="col-md-4 text-center">
          <img
            src="https://ssl.gstatic.com/onebox/weather/48/partly_cloudy.png"
            alt="Mostly Cloudy"
          />
          <span>6°C</span>
        </div>
        <div className="col-md-4 text-center mt-3 mt-md-0">
          <h1>New York, USA</h1>
          <ul>
            <li>Friday 19:00</li>
            <li>Mostly Cloudy</li>
          </ul>
        </div>
        <div className="col-md-4 text-center mt-3 mt-md-0">
          <ul>
            <li>Precipitation: 1%</li>
            <li>Humidity: 59%</li>
            <li>Wind: 11km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

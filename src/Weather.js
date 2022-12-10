import React from "react";
import "./Weather.css";

export default function Weather() {
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
          <img
            src="https://ssl.gstatic.com/onebox/weather/48/partly_cloudy.png"
            alt="Mostly Cloudy"
          />
          <span className="temperature">6°</span>
          <span className="unit">C</span>
        </div>
        <div className="col-md-4 text-center mt-3 mt-md-0">
          <h1>New York, USA</h1>
          <ul>
            <li>Friday 19:00</li>
            <li>Mostly Cloudy</li>
          </ul>
        </div>
        <div className="col-md-4 text-center mt-3 mt-md-0 conditions">
          <ul>
            <li>
              <span className="strong">Precipitation:</span> 1%
            </li>
            <li>
              <span className="strong">Humidity:</span> 59%
            </li>
            <li>
              <span className="strong">Wind:</span> 11km/h
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

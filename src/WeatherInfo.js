import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row">
        <div className="col-md-4 text-center">
          <img src={props.data.iconUrl} alt={props.data.alternative} />
          <WeatherTemperature celsius={props.data.temperature} />
        </div>
        <div className="col-md-4 text-center mt-3 mt-md-0">
          <h1>{props.data.city},</h1>
          <h4>{props.data.country}</h4>
          <ul>
            <li>
              <FormattedDate date={props.data.date} />
            </li>
            <li className="text-capitalize">{props.data.condition}</li>
          </ul>
        </div>
        <div className="col-md-4 text-center mt-3 mt-md-0 conditions">
          <ul>
            <li>
              <span className="strong">Feels like: </span>
              {props.data.feelslike}°C
            </li>
            <li>
              <span className="strong">Humidity:</span> {props.data.humidity}%
            </li>
            <li>
              <span className="strong">Wind: </span> {props.data.wind}km/h
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

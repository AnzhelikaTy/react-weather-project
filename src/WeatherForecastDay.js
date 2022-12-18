import React from "react";

export default function WeatherForecastDay(props) {
  return (
    <div>
      <div className="forecast-day">{props.data.dt}</div>
      Icon
      <div className="forecast-temperatures">
        <span className="forecast-temperature-max">
          {Math.round(props.data.temperature.maximum)}°
        </span>
        <span className="forecast-temperature-min">
          {" "}
          {Math.round(props.data.temperature.minimum)}°
        </span>
      </div>
    </div>
  );
}

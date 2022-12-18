import React from "react";

export default function WeatherForecastDay(props) {
  function day() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }
  return (
    <div>
      <div className="forecast-day">{day()}</div>
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

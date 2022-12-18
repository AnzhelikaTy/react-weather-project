import React from "react";
import axios from "axios";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }

  const apiKey = "8ba95f6fb30o9e342ftad41e6513023b";
  let longitude = props.coordinates.longitude;
  let latitude = props.coordinates.latitude;
  const apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}`;

  axios.get(apiUrl).then(handleResponse);
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="forecast-day">Thu</div>
          Icon
          <div className="forecast-temperatures">
            <span className="forecast-temperature-max">19°</span>
            <span className="forecast-temperature-min"> 10°</span>
          </div>
        </div>
      </div>
    </div>
  );
}

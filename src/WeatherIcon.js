import React from "react";

export default function WeatherIcon(props) {
  let icon = props.icon_url;
  return <img src={icon} alt="SheCodes Weather icon" />;
}

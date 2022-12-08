import React from "react";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h3>Weather App</h3>
        <Weather />
        <footer>
          <a
            href="https://github.com/AnzhelikaTy/react-weather-project.git"
            target="_blank"
            rel="noreferrer"
          >
            Open-source code
          </a>{" "}
          by Anzhelika Susemcik
        </footer>
      </div>
    </div>
  );
}

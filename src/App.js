import React, { useState } from "react";
import CurrentLocation from "./currentLocation";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <CurrentLocation />
      </div>
      <div className="footer-info">
        <span>WeatherSphere © {new Date().getFullYear()} | Developed by </span>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/ray3y"
        >
          Rahul Gupta
        </a>
      </div>
    </React.Fragment>
  );
}

export default App;

import React, { useContext } from "react";
import "./CurrentForecast.css";
import { currentForecastIcon } from "../../Util/getCurrentForecastIcon";
import { WeatherContext } from "../Weather/Weather";

const CurrentForecast = ({ measurement, city }) => {
  const weather = useContext(WeatherContext);
  return (
    <div className="current-forecast">
      <div className="clouds-temperature">
        <div className="clouds-icon" tabIndex="-1">
          {currentForecastIcon(weather) || null}
          <p className="city-responsive">{city.city}, {city.country}</p>
        </div>
        <div className="current-temperature">
          <div className="temperature">
            <p>
              {Math.round(weather?.main?.temp)}
              {measurement}
            </p>
          </div>
          <div className="feels-like">
            <p>
              = feels like: {Math.round(weather?.main?.feels_like)}
              {measurement}
            </p>
          </div>
        </div>
      </div>
      <div className="sky-visibility">
        <p>{weather?.weather[0]?.description}</p>
        <p>visibility: {weather?.visibility / 1000}km</p>
      </div>
    </div>
  );
};

export default CurrentForecast;

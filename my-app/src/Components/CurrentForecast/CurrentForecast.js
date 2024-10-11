import React, { useContext } from "react";
import "./CurrentForecast.css";
import { currentForecastIcon } from "../../Util/getCurrentForecastIcon";
import { WeatherContext } from "../Weather/Weather";

const CurrentForecast = ({ measurement, city }) => {
  const weather = useContext(WeatherContext);
  return (
    <div className="current-forecast">
      <div className="clouds-temperature">
        <div className="clouds-icon">
          {currentForecastIcon(weather) || null}
          <p className="city-responsive">{city.city}, {city.country}</p>
        </div>
        <div className="current-temperature">
          <div className="temperature">
            <p>
              {Math.round(weather?.current?.temp)}
              {measurement}
            </p>
          </div>
          <div className="feels-like">
            <p>
              = feels like: {Math.round(weather?.current?.feels_like)}
              {measurement}
            </p>
          </div>
        </div>
      </div>
      <div className="sky-visibility">
        <p>{weather?.current?.weather[0]?.description}</p>
        {/* <p>/</p> */}
        <p>visibility: {weather?.current?.visibility / 1000}km</p>
      </div>
    </div>
  );
};

export default CurrentForecast;

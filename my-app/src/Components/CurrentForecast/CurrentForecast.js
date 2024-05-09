import React, {useContext} from "react";
import "./CurrentForecast.css";
import { currentForecastIcon } from "../../Util/currentForecastIcon";
import {WeatherContext} from '../Weather/Weather'

const CurrentForecast= ({measurement}) => {

  const weather = useContext(WeatherContext);

  return (
    <div className="currentForecast">
      <div className="cloudsAndTemperature">
        <div className="cloudsIcon">{currentForecastIcon(weather) || null}</div>
        <div className="currentTemperature">
          <div className="temperature">
            <p>
              {Math.round(weather?.current?.temp)}
              {measurement}
            </p>
          </div>
          <div className="feelsLike">
            <p>
              = feels like: {Math.round(weather?.current?.feels_like)}
              {measurement}
            </p>
          </div>
        </div>
      </div>
      <div className="skyVisibility">
        <p>{weather?.current?.weather[0]?.description}</p>
        <p>/</p> 
        <p>visibility: {weather?.current?.visibility / 1000}km</p>
      </div>
    </div>
  );
};

export default CurrentForecast;

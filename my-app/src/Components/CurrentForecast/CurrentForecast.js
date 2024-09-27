import React, { useContext } from "react";
import "./CurrentForecast.css";
import { currentForecastIcon } from "../../Util/getCurrentForecastIcon";
import { WeatherContext } from "../Weather/Weather";
// import { localDateTime } from '../../Util/getLocalDateTime';

const CurrentForecast = ({ measurement, city }) => {
  const weather = useContext(WeatherContext);
  // const currentDate = localDateTime(weather?.timezone_offset).date;
  // const currentDay = localDateTime(weather?.timezone_offset).day;

  return (
    <div className="current-forecast">
      {/* <div className="current-forecast-responsive">
        <div className="responsive-temperature">
          <div className="temp">
            <p>
              {city.city}, {city.country}
            </p>
            <p className="responstemp">
              {Math.round(weather?.current?.temp)}
              {measurement}
            </p>
            <p className="responsiveFeelsLike">
              = feels like: {Math.round(weather?.current?.feels_like)}
              {measurement}
            </p>
          </div>
          <div className="responsVisibility">
          <p>{weather?.current?.weather[0]?.description}</p>
        <p>/</p>
        <p>visibility: {weather?.current?.visibility / 1000}km</p>
          </div>
        </div>
        <div className="cloudsResponsive">
          <div className="cloudsOne">
            <div className="cloudsRespIcon">
            {currentForecastIcon(weather) || null}
            </div>
          </div>
          <div className="cloudsTwo">
            <p>{currentDay}, {currentDate}</p>
          </div>
          <div></div>
        </div>
      </div> */}
      <div className="clouds-temperature">
        <div className="clouds-icon">
          {currentForecastIcon(weather) || null}
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
        <p>/</p>
        <p>visibility: {weather?.current?.visibility / 1000}km</p>
      </div>
    </div>
  );
};

export default CurrentForecast;

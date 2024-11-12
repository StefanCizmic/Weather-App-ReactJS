import React, { useState, useEffect, createContext } from "react";
import "./Weather.css";
import { localDateTime } from "../../Util/getLocalDateTime";
import { dailyForecast } from "../../Util/getDailyForecast";
import { nista } from "../../Util/nista";
import CurrentForecast from "../CurrentForecast/CurrentForecast";
import Time from "../Time/Time";
import DateAndPlace from "../DateAndPlace/DateAndPlace";
import CurrentConditions from "../CurrentConditions/CurrentConditions";
import WeekDays from "../WeekDays/WeekDays";
import WeeklyForecast from "../WeeklyForecast/WeeklyForecast";
import ForecastByHour from "../ForecastByHour/ForecastByHour";

export const WeatherContext = createContext();

const Weather = ({ weather, weeklyWeather, city, measurement }) => {
  const [jaja, setJaja] = useState([]);
  useEffect(() => {
    localDateTime(weather?.timezone);
    const e = async () => {
      const resp = await nista(weeklyWeather);
      setJaja(resp);
    };
  }, []);

  return (
    <div>
      <WeatherContext.Provider value={weather}>
        <div className="weather">
          <div className="weather-data">
            <CurrentForecast measurement={measurement} city={city} />
            <div className="weather-data-right">
              <div className="location-info">
                <Time />
                <DateAndPlace city={city} />
              </div>
              {/* <WeeklyForecast weeklyWeather={jaja} measurement={measurement} /> */}
            </div>
          </div>
          <div className="weather-icons">
            <CurrentConditions />
            {/* <WeekDays weeklyWeather={weeklyWeather}/> */}
          </div>
          {/* <ForecastByHour weeklyWeather={weeklyWeather} measurement={measurement}/> */}
        </div>
      </WeatherContext.Provider>
    </div>
  );
};

export default Weather;

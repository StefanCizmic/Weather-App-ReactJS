import React, { useState, useEffect, createContext } from "react";
import "./Weather.css";
import { localDateTime } from "../../Util/getLocalDateTime";
import { dailyForecast } from "../../Util/getDailyForecast";
import CurrentForecast from "../CurrentForecast/CurrentForecast";
import Time from "../Time/Time";
import DateAndPlace from "../DateAndPlace/DateAndPlace";
import CurrentConditions from "../CurrentConditions/CurrentConditions";
import WeekDays from "../WeekDays/WeekDays";
import WeeklyForecast from "../WeeklyForecast/WeeklyForecast";
import ForecastByHour from "../ForecastByHour/ForecastByHour";

export const WeatherContext = createContext();

const Weather = ({ weather, city, measurement }) => {
  const [dailyTemp, setDailyTemp] = useState(dailyForecast(weather, 0));

  useEffect(() => {
    localDateTime(weather?.timezone_offset);
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
              <WeeklyForecast dailyTemp={dailyTemp} measurement={measurement} />
            </div>
          </div>
          <div className="weather-icons">
            <CurrentConditions />
            <WeekDays setDailyTemp={setDailyTemp} />
          </div>
          <ForecastByHour measurement={measurement}/>
        </div>
      </WeatherContext.Provider>
    </div>
  );
};

export default Weather;

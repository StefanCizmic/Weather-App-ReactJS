import React, { useState, useEffect, createContext } from "react";
import "./Weather.css";
import { localDateTime } from "../../Util/localDateTime";
import { dailyForecast } from "../../Util/dailyForecast";
import CurrentForecast from "../CurrentForecast/CurrentForecast";
import Time from "../Time/Time";
import DateAndPlace from "../DateAndPlace/DateAndPlace";
import CurrentConditions from "../CurrentConditions/CurrentConditions";
import WeeklyDays from "../WeeklyDays/WeeklyDays";
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
      <div className="weatherCard">
        <div className="weatherDataContainer">
          <CurrentForecast measurement={measurement}/>
          <div className="weatherDataRight">
            <div className="locationInfo">
              <Time />
              <DateAndPlace city={city} />
            </div>
            <WeeklyForecast dailyTemp={dailyTemp} measurement={measurement}/>
          </div>
        </div>
        <div className="weatherIconsContainer">
          <CurrentConditions />
          <WeeklyDays setDailyTemp={setDailyTemp} />
        </div>
        <ForecastByHour measurement={measurement}/>
      </div>
      </WeatherContext.Provider>
    </div>
  );
};

export default Weather;

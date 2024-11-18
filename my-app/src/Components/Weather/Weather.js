import React, { useState, useEffect, createContext } from "react";
import "./Weather.css";
import { localDateTime } from "../../Util/getLocalDateTime";
import { dailyForecast } from "../../Util/getDailyForecast";
import { getWeekly } from "../../Util/getWeekly";
import CurrentForecast from "../CurrentForecast/CurrentForecast";
import Time from "../Time/Time";
import DateAndPlace from "../DateAndPlace/DateAndPlace";
import CurrentConditions from "../CurrentConditions/CurrentConditions";
import WeekDays from "../WeekDays/WeekDays";
import WeeklyForecast from "../WeeklyForecast/WeeklyForecast";
import ForecastByHour from "../ForecastByHour/ForecastByHour";

export const WeatherContext = createContext();

const Weather = ({ weather, weeklyWeather, city, measurement }) => {
  const [weekly, setWeekly] = useState([]);
  const [showWeekly, setShowWeekly] = useState([]);
  useEffect(() => {
    localDateTime(weather?.timezone);
    const weeklyTemp = async () => {
      const resp = await getWeekly(weeklyWeather);
      setWeekly(resp);
    };
    weeklyTemp();
  }, [weather?.timezone, weeklyWeather]);
  useEffect(() => {
    if (weekly.length > 0) {
      setShowWeekly(weekly[0]);
    }
  }, [weekly]);

  console.log(weekly);

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
              <WeeklyForecast
                showWeekly={showWeekly}
                measurement={measurement}
              />
            </div>
          </div>
          <div className="weather-icons">
            <CurrentConditions />
            <WeekDays weekly={weekly} setShowWeekly={setShowWeekly}/>
          </div>
          <ForecastByHour
            weeklyWeather={weeklyWeather}
            measurement={measurement}
          />
        </div>
      </WeatherContext.Provider>
    </div>
  );
};

export default Weather;

import React, { useState, useEffect } from "react";
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

const Weather = ({ weather, city, measurement }) => {

  const [dailyTemp, setDailyTemp] = useState(dailyForecast(weather, 0));

  useEffect(() => {
    localDateTime(weather?.timezone_offset);
  }, []);

  return (
    <div>
      <div className="weatherCard">
        <div className="weatherDataContainer">
          <CurrentForecast weather={weather} measurement={measurement}/>
          <div className="weatherDataRight">
            <div className="locationInfo">
              <Time weather={weather} />
              <DateAndPlace weather={weather} city={city} />
            </div>
            <WeeklyForecast dailyTemp={dailyTemp} measurement={measurement}/>
          </div>
        </div>
        <div className="weatherIconsContainer">
          <CurrentConditions weather={weather} />
          <WeeklyDays weather={weather} setDailyTemp={setDailyTemp} />
        </div>
        <ForecastByHour weather={weather} measurement={measurement}/>
      </div>
    </div>
  );
};

export default Weather;

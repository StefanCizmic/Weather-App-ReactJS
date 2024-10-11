import React, { useState, useEffect, useContext } from "react";
import "./WeekDays.css";
import { WeatherContext } from "../Weather/Weather";
import { daysOrder } from "../../Util/getDays";
import { weeklyDays } from "../../Data/weeklyDays";
import { useScreenWidth } from "../../Hooks/useScreenWidth";
import { dailyForecast } from "../../Util/getDailyForecast";

const WeekDays = ({ setDailyTemp }) => {
  const weather = useContext(WeatherContext);
  const [weekDays, setWeekDays] = useState([]);
  const weekData = weeklyDays(weekDays, weather);
  const screenWidth = useScreenWidth();

  useEffect(() => {
    const getDaysOrder = daysOrder(weather);
    if (getDaysOrder) {
      setWeekDays(getDaysOrder);
    }
  }, [weather]);

  return (
    <div className="week-days">
      {weekData.map((item, index) => (
        <div
          className="days"
          id={item.id}
          onClick={() => {
            if (screenWidth > 1150) {
              setDailyTemp(item.data);
            }
          }}
        >
          <p className="day">{item.name}</p>
          <div className="day-img">{item.icon}</div>
          {screenWidth <= 1150 && (
            <div className="responsive-temps">
              <div className="day-img-responsive">{item.icon}</div>
              <p>Max: {dailyForecast(weather, index).maxTemp}°</p>
              <p>Min: {dailyForecast(weather, index).minTemp}°</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default WeekDays;

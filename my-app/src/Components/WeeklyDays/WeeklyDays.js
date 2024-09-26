import React, { useState, useEffect, useContext } from "react";
import "./WeeklyDays.css";
import { WeatherContext } from "../Weather/Weather";
import { daysOrder } from "../../Util/getDays";
import { weeklyDays } from "../../Data/weeklyDays";

const WeeklyDays = ({ setDailyTemp }) => {
  const weather = useContext(WeatherContext);
  const [weekDays, setWeekDays] = useState([]);
  const weeklyData = weeklyDays(weekDays, weather);

  useEffect(() => {
    const getDaysOrder = daysOrder(weather);
    if (getDaysOrder) {
      setWeekDays(getDaysOrder);
    }
  }, [weather]);

  return (
    <div className="weeklyContainer">
      {weeklyData.map((item) => (
        <div
          className="days"
          id={item.id}
          onClick={() => setDailyTemp(item.data)}
        >
          <p className="day">{item.name}</p>
          <div className="dayImg">{item.icon}</div>
        </div>
      ))}
    </div>
  );
};

export default WeeklyDays;

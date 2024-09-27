import React, { useState, useEffect, useContext } from "react";
import "./WeekDays.css";
import { WeatherContext } from "../Weather/Weather";
import { daysOrder } from "../../Util/getDays";
import { weeklyDays } from "../../Data/weeklyDays";

const WeekDays = ({ setDailyTemp }) => {
  const weather = useContext(WeatherContext);
  const [weekDays, setWeekDays] = useState([]);
  const weekData = weeklyDays(weekDays, weather);

  useEffect(() => {
    const getDaysOrder = daysOrder(weather);
    if (getDaysOrder) {
      setWeekDays(getDaysOrder);
    }
  }, [weather]);

  return (
    <div className="week-days">
      {weekData.map((item) => (
        <div
          className="days"
          id={item.id}
          onClick={() => setDailyTemp(item.data)}
        >
          <p className="day">{item.name}</p>
          <div className="day-img">{item.icon}</div>
        </div>
      ))}
    </div>
  );
};

export default WeekDays;

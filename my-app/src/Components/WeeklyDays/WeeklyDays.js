import React, { useState, useEffect, useContext } from "react";
import "./WeeklyDays.css";
import { WeatherContext } from "../Weather/Weather";
import { daysOrder } from "../../Util/daysOrder";
import { forecastByDaysIcon } from "../../Util/forecastByDaysIcon";
import { dailyForecast } from "../../Util/dailyForecast";

const WeeklyDays = ({ setDailyTemp }) => {
  
  const weather = useContext(WeatherContext);
  const [weekDays, setWeekDays] = useState([]);

  const weeklyData = [
    {
      name: weekDays[0],
      id: 1,
      data: dailyForecast(weather, 0),
      icon: forecastByDaysIcon(weather, 0),
    },
    {
      name: weekDays[1],
      id: 2,
      data: dailyForecast(weather, 1),
      icon: forecastByDaysIcon(weather, 1),
    },
    {
      name: weekDays[2],
      id: 3,
      data: dailyForecast(weather, 2),
      icon: forecastByDaysIcon(weather, 2),
    },
    {
      name: weekDays[3],
      id: 4,
      data: dailyForecast(weather, 3),
      icon: forecastByDaysIcon(weather, 3),
    },
    {
      name: weekDays[4],
      id: 5,
      data: dailyForecast(weather, 4),
      icon: forecastByDaysIcon(weather, 4),
    },
    {
      name: weekDays[5],
      id: 6,
      data: dailyForecast(weather, 5),
      icon: forecastByDaysIcon(weather, 5),
    },
    {
      name: weekDays[6],
      id: 7,
      data: dailyForecast(weather, 6),
      icon: forecastByDaysIcon(weather, 6),
    },
  ];

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

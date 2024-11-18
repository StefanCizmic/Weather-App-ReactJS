import React from "react";
import "./WeekDays.css";
import { useScreenWidth } from "../../Hooks/useScreenWidth";

const WeekDays = ({ weekly, setShowWeekly }) => {
  const screenWidth = useScreenWidth();

  return (
    <div className="week-days">
      {weekly.map((day, index) => (
        <div key={index} className="days" onClick={() => setShowWeekly(day)}>
          <p className="day">{day.date}</p>
          {screenWidth <= 1150 && (
            <div className="responsive-temps">
              <p>Max: {day.maxTemp}°</p>
              <p>Min: {day.minTemp}°</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default WeekDays;

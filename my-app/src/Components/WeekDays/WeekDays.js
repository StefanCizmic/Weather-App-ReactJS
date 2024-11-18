import React, { useState } from "react";
import "./WeekDays.css";
import { useScreenWidth } from "../../Hooks/useScreenWidth";

const WeekDays = ({ weekly, setShowWeekly }) => {
  const [selectedDay, setSelectedDay] = useState(0);
  const screenWidth = useScreenWidth();

  return (
    <div className="week-days">
      {weekly.map((day, index) => (
        <div
          key={index}
          className="days"
          onClick={() => {
            setSelectedDay(index);
            setShowWeekly(day);
          }}
          style={{
            background:
              selectedDay === index
                ? "linear-gradient(to right, #B76BCC, #7FBFFF, #00B8B8)"
                : "",
            cursor: "pointer",
          }}
        >
          <small className="day-small-p">Day</small>
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

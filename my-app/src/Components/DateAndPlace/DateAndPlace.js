import React, { useContext } from "react";
import { localDateTime } from "../../Util/getLocalDateTime";
import { WeatherContext } from "../Weather/Weather";
import "./DateAndPlace.css";

const DateAndPlace = ({ city }) => {
  const weather = useContext(WeatherContext);
  const currentDate = localDateTime(weather?.timezone).date;
  const currentDay = localDateTime(weather?.timezone).day;

  return (
    <div className="date-place">
      <div className="place">
        <p>
          {city.city}, <span>{city.country}</span>
        </p>
      </div>
      <div className="date">
        <p>
          {currentDay} {currentDate}
        </p>
      </div>
    </div>
  );
};

export default DateAndPlace;

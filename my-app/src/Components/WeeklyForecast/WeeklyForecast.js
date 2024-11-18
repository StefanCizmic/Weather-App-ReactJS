import React from "react";
import "./WeeklyForecast.css";

const WeeklyForecast = ({ showWeekly, measurement }) => {
  return (
    <div className="weekly-forecast">
      <div className="weekly-left">
        <div>
          <p>Max. Temperature</p>
          <p>
            {showWeekly?.maxTemp} {measurement}
          </p>
        </div>
        <div>
          <p>Wind</p>
          <p>{showWeekly.wind} km/h</p>
        </div>
        <div>
          <p>Ground Level</p>
          <p>{showWeekly?.groundLevel} hPa</p>
        </div>
      </div>
      <div className="weekly-right">
        <div>
          <p>Min. Temperature</p>
          <p>
            {showWeekly?.minTemp} {measurement}
          </p>
        </div>
        <div>
          <p>Pressure</p>
          <p>{showWeekly.pressure}mb</p>
        </div>
        <div>
          <p>Sea Level</p>
          <p>{showWeekly?.seaLevel} hPa</p>
        </div>
      </div>
    </div>
  );
};

export default WeeklyForecast;

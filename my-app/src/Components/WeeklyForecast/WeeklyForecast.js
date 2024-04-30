
import React from "react";
import "./WeeklyForecast.css";

const WeeklyForecast = ({dailyTemp, measurement}) => {

  return (
    <div className="weekForecast">
      <div className="forecastLeft">
        <div>
          <p>Max. Temperature</p>
          <p>{dailyTemp?.maxTemp} {measurement}</p>
        </div>
        <div>
          <p>Wind</p>
          <p>{dailyTemp.wind} km/h</p>
        </div>
        <div>
          <p>Pressure</p>
          <p>{dailyTemp.pressure}mb</p>
        </div>
      </div>
      <div className="forecastRight">
        <div>
          <p>Min. Temperature</p>
          <p>{dailyTemp?.minTemp} {measurement}</p>
        </div>
        <div>
          <p>Cloud cover</p>
          <p>{dailyTemp?.cloudCover} %</p>
        </div>
        <div>
          <p>Highest UV</p>
          <p>{dailyTemp?.uvi} uv</p>
        </div>
      </div>
    </div>
  );
};

export default WeeklyForecast;

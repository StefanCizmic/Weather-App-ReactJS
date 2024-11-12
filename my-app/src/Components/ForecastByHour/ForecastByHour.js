import React from "react";
import "./ForecastByHour.css";
import { forecastByHourIcon } from "../../Util/getForecastByHourIcon";

const ForecastByHour = ({ weeklyWeather, measurement }) => {
  return (
    <div className="forecast-by-hour">
      {weeklyWeather.list.slice(0, 11).map((item) => {
        const date = new Date(item.dt_txt);
        const hours = date.getHours().toString().padStart(2, "0") + ":00";
        const icon = forecastByHourIcon(item.weather[0].main);
        return (
          <div className="by-hour" key={item.id}>
            <div className="hours">{hours}</div>
            <div className="hours-img">{icon}</div>
            <div>
              {Math.round(item.main.temp)}
              {measurement}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ForecastByHour;

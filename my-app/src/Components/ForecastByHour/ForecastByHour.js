import React, {useContext} from "react";
import "./ForecastByHour.css";
import { forecastByHour } from "../../Data/forecastByHour";
import {WeatherContext} from '../Weather/Weather';
import { hoursOrder } from "../../Util/getHours";

const ForecastByHour = ({measurement }) => {
  
  const weather = useContext(WeatherContext);
  const hours = hoursOrder(weather?.timezone_offset);
  const dataByHour = forecastByHour(weather, hours);

  return (
    <div className="forecast-by-hour">
      {dataByHour.map((item) => (
        <div className="by-hour" key={item.id}>
          <div className="hours">{item.time}:00</div>
          <div className="hours-img">{item.icon}</div>
          <div>
            {item.temperature}
            {measurement}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ForecastByHour;

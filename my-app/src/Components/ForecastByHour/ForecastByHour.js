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
    <div className="forecastByHour">
      {dataByHour.map((item) => (
        <div className="byHour" key={item.id}>
          <div className="hours">{item.time}:00</div>
          <div className="hoursImg">{item.icon}</div>
          <div className="hoursTemp">
            {item.temperature}
            {measurement}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ForecastByHour;

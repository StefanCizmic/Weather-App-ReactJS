import React, {useContext} from "react";
import "./CurrentConditions.css";
import {currentConditions} from '../../Data/currentConditions';
import { WeatherContext } from "../Weather/Weather";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CurrentConditions = () => {
  const weather = useContext(WeatherContext)
  const conditionsData = currentConditions(weather);
  return (
    <div className="currentConditions">
      {conditionsData.map((item) => (
        <div className="conditions" key={item.name}>
          <div className="conditionsLogo">
            <FontAwesomeIcon
              icon={item.icon}
              style={{ color: "white", width: "25px", height: "25px" }}
            />
          </div>
          <p>
            {item.description} {item.measurement}
          </p>
        </div>
      ))}
    </div>
  );
};
export default CurrentConditions;

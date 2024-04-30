import React from "react";
import "./CurrentConditions.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWind, faDroplet, faCloud } from "@fortawesome/free-solid-svg-icons";

const CurrentConditions = ({ weather }) => {
  
  const conditionsData = [
    {
      name: "wind",
      icon: faWind,
      description: weather?.current?.wind_speed,
      measurement: "km/h",
    },
    {
      name: "humidity",
      icon: faDroplet,
      description: weather?.current?.humidity,
      measurement: "%",
    },
    {
      name: "clouds",
      icon: faCloud,
      description: weather?.current?.clouds,
      measurement: "%",
    },
  ];

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

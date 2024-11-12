import React, { useState, useEffect, useContext } from "react";
import { localDateTime } from "../../Util/getLocalDateTime";
import { WeatherContext } from "../Weather/Weather";
import "./Time.css";

const Time = () => {
  const weather = useContext(WeatherContext);
  const [local, setLocal] = useState("");

  useEffect(() => {
    const intervalId = setInterval(() => {
      const localTime = localDateTime(weather?.timezone).time;
      setLocal(localTime);
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="time">
      <p>{local}</p>
    </div>
  );
};

export default Time;

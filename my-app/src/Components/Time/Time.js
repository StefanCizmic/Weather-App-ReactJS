import React, { useState, useEffect } from "react";
import {localDateTime} from '../../Util/localDateTime';
import "./Time.css";

const Time = ({ weather }) => {
  
  const [local, setLocal] = useState('');
  
  useEffect(() => {
    const intervalId = setInterval(() => {
      const localTime = localDateTime(weather.timezone_offset).time;
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
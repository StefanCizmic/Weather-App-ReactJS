import React, { useState, useEffect, useRef } from "react";
import "./Home.css";
import Sidebar from "../Sidebar/Sidebar";
import { getCards } from "../../Util/getCards";
import { getMeasurement } from "../../Util/getMeasurement";
import { getLocation } from "../../Util/getLocation";
import { getBackgroundImg } from "../../Util/getBackgroundImg";
import { getWeather } from "../../Util/Fetch/getWeather";
import { unixTimestamp } from "../../Util/getUnixTimestamp";

const Home = () => {
  const [city, setCity] = useState({});
  const [data, setData] = useState({});
const [weeklyWeather, setWeeklyWeather] = useState([]);
  const [cardIsOpen, setCardIsOpen] = useState("searchCard");
  const [currentLocation, setCurrentLocation] = useState({});
  const [currentTimestamp, setCurrentTimestamp] = useState("");
  const [units, setUnits] = useState("metric");
  const [measurement, setMeasurement] = useState("");
  const cards = getCards({
    setData,
    setWeeklyWeather,
    setCity,
    setCardIsOpen,
    currentLocation,
    data,
    weeklyWeather,
    city,
    setUnits,
    units,
    setMeasurement,
    measurement,
  });

  useEffect(() => {
    getMeasurement({ units, setMeasurement });
  }, [units]);

  useEffect(() => {
    getLocation({
      setCurrentLocation,
      getWeather,
      unixTimestamp,
      getBackgroundImg,
      setCurrentTimestamp,
      backgroundRef,
    });
  }, []);

  const backgroundRef = useRef(null);

  return (
    <div className="home" ref={backgroundRef}>
      <Sidebar
        className="sidebar"
        setCardIsOpen={setCardIsOpen}
        currentTimestamp={currentTimestamp}
      />
      <div className="search">{cards[cardIsOpen] || null}</div>
    </div>
  );
};

export default Home;

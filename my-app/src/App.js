import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import Sidebar from "./Components/Sidebar/Sidebar";
import Weather from "./Components/Weather/Weather";
import Search from "./Components/Search/Search";
import { backgroundImg } from "./Util/backgroundImg";
import { getWeather } from "./Util/Fetch/getWeather";
import { unixTimestamp } from "./Util/unixTimestamp";
import Location from "./Components/Location/Location";
import Settings from "./Components/Settings/Settings";
import AboutMe from "./Components/AboutMe/AboutMe";

const cards = ({
  setData,
  setCity,
  setCardIsOpen,
  currentLocation,
  data,
  city,
  setUnits,
  units,
  measurement,
  setMeasurement,
}) => ({
  locationCard: <Location currentLocation={currentLocation} />,
  settingsCard: (
    <Settings
      setUnits={setUnits}
      setCardIsOpen={setCardIsOpen}
      setMeasurement={setMeasurement}
    />
  ),
  aboutMeCard: <AboutMe />,
  weatherCard: <Weather weather={data} city={city} measurement={measurement} />,
  searchCard: (
    <Search
      setWeather={setData}
      setCity={setCity}
      setCardIsOpen={setCardIsOpen}
      units={units}
    />
  ),
});

const App = () => {
  const [city, setCity] = useState({});
  const [data, setData] = useState({});
  const [cardIsOpen, setCardIsOpen] = useState("searchCard");
  const [currentLocation, setCurrentLocation] = useState({});
  const [currentTimestamp, setCurrentTimestamp] = useState("");
  const [units, setUnits] = useState(
    JSON.parse(localStorage.getItem("units")) || "metric"
  );
  const [measurement, setMeasurement] = useState("");

  useEffect(() => {
    localStorage.setItem("units", JSON.stringify(units));
    if (units === "metric") {
      setMeasurement(`${"\u00B0"}C`);
    } else if (units === "imperial") {
      setMeasurement(`${"\u00B0"}F`);
    } else;
  }, [units]);

  useEffect(() => {
    const success = async (pos) => {
      const coords = pos.coords;
      const currentPosition = {
        latitude: coords.latitude,
        longitude: coords.longitude,
      };
      setCurrentLocation(currentPosition);
      const currentData = await getWeather(currentPosition);
      if (currentData) {
        const timeOfDay = unixTimestamp(currentData);
        backgroundImg(
          currentData,
          backgroundRef,
          timeOfDay.sunrise,
          timeOfDay.sunset,
          timeOfDay.current
        );
        setCurrentTimestamp(timeOfDay);
      }
    };
    navigator.geolocation.getCurrentPosition(success);
  }, []);

  console.log(currentLocation);

  const backgroundRef = useRef(null);

  return (
    <div id="rootDiv">
      <div className="background" ref={backgroundRef}>
        <Sidebar
          setCardIsOpen={setCardIsOpen}
          currentTimestamp={currentTimestamp}
        />
        <div className="secondDiv">
          {cards({
            setData,
            setCity,
            setCardIsOpen,
            currentLocation,
            data,
            city,
            setUnits,
            units,
            measurement,
            setMeasurement,
          })?.[cardIsOpen] || null}
        </div>
      </div>
    </div>
  );
};

export default App;

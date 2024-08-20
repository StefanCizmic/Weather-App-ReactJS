import React, { useState, useEffect, useRef } from "react";
import { getWeather } from "../../Util/Fetch/getWeather";
import "./Search.css";
import cities from "cities.json";

const Search = ({ setWeather, setCity, setCardIsOpen, units }) => {
  const [filteredCities, setFilteredCities] = useState([]);

  const inputHandlerFunction = (e) => {
    const typedText = e.target.value.toLowerCase();
    if (typedText.length > 2) {
      const filtered = cities
        .filter((city) => city.name.toLowerCase().startsWith(typedText))
        .slice(0, 6);
      setFilteredCities(filtered);
    } else {
      setFilteredCities([]);
    }
  };

  const handleSearch = async (coordinates) => {
    if (coordinates) {
      const weatherData = await getWeather(coordinates, units);
      setWeather(weatherData);
      setCardIsOpen("weatherCard");
    }
  };

  const inputRef = useRef(null);
  useEffect(() => {
    const input = inputRef.current;
    input.classList.add("animation");
    input.focus();
  }, []);

  return (
    <div className="inputDiv">
      <div className="input">
        <input
          className="inputSearch"
          type="text"
          placeholder="type city"
          ref={inputRef}
          onChange={inputHandlerFunction}
          onKeyDown={(e) =>
            e?.key === "Enter" && filteredCities.length > 0
              ? handleSearch({
                  latitude: filteredCities[0].lat,
                  longitude: filteredCities[0].lng,
                }) &&
                setCity({
                  city: filteredCities[0].name,
                  country: filteredCities[0].country,
                })
              : null
          }
        ></input>
      </div>
      <div className="filteredDiv">
        <div className="filteredCities">
          {filteredCities.map((city) => (
            <div
              onClick={() =>
                handleSearch({ latitude: city?.lat, longitude: city?.lng }) &&
                setCity({ city: city?.name, country: city?.country })
              }
              key={city?.id}
            >
              {city?.name}, {city?.country}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Search;

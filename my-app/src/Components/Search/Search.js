import React, { useState, useEffect, useRef } from "react";
import "./Search.css";
import { useScreenWidth } from "../../Hooks/useScreenWidth";
import { getWeather } from "../../Util/Fetch/getWeather";
import { getFilteredCities } from "../../Util/getFilteredCities";

const Search = ({ setWeather, setCity, setCardIsOpen, units }) => {
  const [filteredCities, setFilteredCities] = useState([]);
  const screenWidth = useScreenWidth();
  const inputRef = useRef(null);

  const inputHandler = (e) => {
    const typedText = e.target.value.toLowerCase();
    getFilteredCities(typedText, setFilteredCities, screenWidth);
  };

  const handleSearch = async (coordinates) => {
    if (coordinates) {
      const weatherData = await getWeather(coordinates, units);
      setWeather(weatherData);
      setCardIsOpen("weatherCard");
    }
  };

  useEffect(() => {
    const input = inputRef.current;
    if (input) {
      input.classList.add("animation");
      if (screenWidth > 768) {
        input.focus();
      }
    }
  }, [screenWidth]);

  return (
    <div className="search-input-container">
      <div className="search-input">
        <input
          type="text"
          placeholder="type city"
          ref={inputRef}
          onChange={inputHandler}
          onKeyDown={(e) =>
            e.key === "Enter" && filteredCities.length > 0
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
        />
      </div>
      <div className="filtered-cities-container">
        <div className="filtered-cities">
          {filteredCities.map((city) => (
            <div
              onClick={() => {
                handleSearch({ latitude: city.lat, longitude: city.lng });
                setCity({ city: city.name, country: city.country });
              }}
              key={city.id}
            >
              {city.name}, {city.country}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Search;

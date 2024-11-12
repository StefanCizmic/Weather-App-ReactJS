import React from 'react';
import Weather from '../Components/Weather/Weather';
import Search from '../Components/Search/Search';
import Location from '../Components/Location/Location';
import Settings from '../Components/Settings/Settings';
import AboutMe from '../Components/AboutMe/AboutMe';

export const getCards = ({ setData, setWeeklyWeather, setCity, setCardIsOpen, currentLocation, data, weeklyWeather, city, setUnits, units, setMeasurement, measurement }) => {
        const locationCard = <Location currentLocation={currentLocation} />;
        const settingsCard = (
          <Settings
            setUnits={setUnits}
            setCardIsOpen={setCardIsOpen}
            setMeasurement={setMeasurement}
          />
        );
        const aboutMeCard = <AboutMe />;
        const weatherCard = <Weather weather={data} weeklyWeather={weeklyWeather} city={city} measurement={measurement} />;
        const searchCard = (
          <Search
            setWeather={setData}
            setWeeklyWeather={setWeeklyWeather}
            setCity={setCity}
            setCardIsOpen={setCardIsOpen}
            units={units}
          />
        );
        return {
          locationCard,
          settingsCard,
          aboutMeCard,
          weatherCard,
          searchCard,
        };
      };

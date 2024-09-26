import React from 'react';
import Weather from '../Components/Weather/Weather';
import Search from '../Components/Search/Search';
import Location from '../Components/Location/Location';
import Settings from '../Components/Settings/Settings';
import AboutMe from '../Components/AboutMe/AboutMe';

export const getCards = ({ setData, setCity, setCardIsOpen, currentLocation, data, city, setUnits, units, setMeasurement, measurement }) => {
        const locationCard = <Location currentLocation={currentLocation} />;
        const settingsCard = (
          <Settings
            setUnits={setUnits}
            setCardIsOpen={setCardIsOpen}
            setMeasurement={setMeasurement}
          />
        );
        const aboutMeCard = <AboutMe />;
        const weatherCard = <Weather weather={data} city={city} measurement={measurement} />;
        const searchCard = (
          <Search
            setWeather={setData}
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

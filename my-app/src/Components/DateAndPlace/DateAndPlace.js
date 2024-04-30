import React, { useState, useEffect } from 'react';
import { localDateTime } from '../../Util/localDateTime';
import './DateAndPlace.css';

const DateAndPlace = ({ weather, city}) => {
    
    const currentDate = localDateTime(weather?.timezone_offset).date;
    const currentDay = localDateTime(weather?.timezone_offset).day;

    return (
        <div className='dateAndPlace'>
            <div className='cityAndCountry'>
                <p>{city.city}, <span>{city.country}</span></p>
            </div>
            <div className='date'>
                <p>{currentDay} {currentDate}</p>
            </div>
        </div>
    )
}

export default DateAndPlace;
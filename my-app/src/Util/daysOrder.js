
import {localDateTime} from './localDateTime';

export const daysOrder = (weather) => {
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const currentDate = localDateTime(weather?.timezone_offset).dateTime;
    const day = days[currentDate.getDay()];
    const startingIndex = days.indexOf(day);
    const newArray = days
      .slice(startingIndex)
      .concat(days.slice(0, startingIndex));
      return newArray;
}
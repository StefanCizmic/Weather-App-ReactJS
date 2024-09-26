import { localDateTime } from "./getLocalDateTime";

export const hoursOrder = (timezone) => {
  
  const hours = [];
  const currentHour = localDateTime(timezone).dateTime.getUTCHours();

  for (let i = 0; i < 13; i++) {
    const hourToAdd = currentHour + i;
    hours.push(hourToAdd);
  }

  const filtered = hours.map((item) => {
    let hour;
    if (item === 24) {
      hour = "00";
    } else {
      hour = (item % 24).toString().padStart(2, "0");
    }
    
    return hour;
  });

  return filtered;
};

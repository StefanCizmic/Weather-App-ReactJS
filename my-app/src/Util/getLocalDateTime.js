export const localDateTime = (timezone) => {
  const unix = new Date().getTime() + timezone * 1000;
  const dateTime = new Date(unix);

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const currentTime = `${dateTime
    .getUTCHours()
    .toString()
    .padStart(2, "0")}:${dateTime
    .getUTCMinutes()
    .toString()
    .padStart(2, "0")}:${dateTime.getUTCSeconds().toString().padStart(2, "0")}`;

  const currentDate = `${dateTime.getUTCDate()}/${
    dateTime.getUTCMonth() + 1
  }/${dateTime.getUTCFullYear()}`;

  const currentDay = days[dateTime.getDay()];

  return {
    dateTime : dateTime,
    time: currentTime,
    date: currentDate,
    day: currentDay
  }
};


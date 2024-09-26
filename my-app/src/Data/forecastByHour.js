import { forecastByHourIcon } from "../Util/getForecastByHourIcon";

export const forecastByHour = (weather, hours) => [
    {
      time: hours[0],
      id: 1,
      temperature: Math.round(weather?.hourly[0]?.temp),
      icon: forecastByHourIcon(weather, 0),
    },
    {
      time: hours[1],
      id: 2,
      temperature: Math.round(weather?.hourly[1]?.temp),
      icon: forecastByHourIcon(weather, 1),
    },
    {
      time: hours[2],
      id: 3,
      temperature: Math.round(weather?.hourly[2]?.temp),
      icon: forecastByHourIcon(weather, 2),
    },
    {
      time: hours[3],
      id: 4,
      temperature: Math.round(weather?.hourly[3]?.temp),
      icon: forecastByHourIcon(weather, 3),
    },
    {
      time: hours[4],
      id: 5,
      temperature: Math.round(weather?.hourly[4]?.temp),
      icon: forecastByHourIcon(weather, 4),
    },
    {
      time: hours[5],
      id: 6,
      temperature: Math.round(weather?.hourly[5]?.temp),
      icon: forecastByHourIcon(weather, 5),
    },
    {
      time: hours[6],
      id: 7,
      temperature: Math.round(weather?.hourly[6]?.temp),
      icon: forecastByHourIcon(weather, 6),
    },
    {
      time: hours[7],
      id: 8,
      temperature: Math.round(weather?.hourly[7]?.temp),
      icon: forecastByHourIcon(weather, 7),
    },
    {
      time: hours[8],
      id: 9,
      temperature: Math.round(weather?.hourly[8]?.temp),
      icon: forecastByHourIcon(weather, 8),
    },
    {
      time: hours[9],
      id: 10,
      temperature: Math.round(weather?.hourly[9]?.temp),
      icon: forecastByHourIcon(weather, 9),
    },
    {
      time: hours[10],
      id: 11,
      temperature: Math.round(weather?.hourly[10]?.temp),
      icon: forecastByHourIcon(weather, 10),
    },
    {
      time: hours[11],
      id: 12,
      temperature: Math.round(weather?.hourly[11]?.temp),
      icon: forecastByHourIcon(weather, 11),
    },
    {
      time: hours[12],
      id: 13,
      temperature: Math.round(weather?.hourly[12]?.temp),
      icon: forecastByHourIcon(weather, 12),
    },
  ];
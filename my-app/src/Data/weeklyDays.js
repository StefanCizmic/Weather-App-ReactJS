import { forecastByDaysIcon } from "../Util/getForecastByDaysIcon";
import { dailyForecast } from "../Util/getDailyForecast";

export const weeklyDays = (weekDays, weather) => [
  {
    name: weekDays[0],
    id: 1,
    data: dailyForecast(weather, 0),
    icon: forecastByDaysIcon(weather, 0),
  },
  {
    name: weekDays[1],
    id: 2,
    data: dailyForecast(weather, 1),
    icon: forecastByDaysIcon(weather, 1),
  },
  {
    name: weekDays[2],
    id: 3,
    data: dailyForecast(weather, 2),
    icon: forecastByDaysIcon(weather, 2),
  },
  {
    name: weekDays[3],
    id: 4,
    data: dailyForecast(weather, 3),
    icon: forecastByDaysIcon(weather, 3),
  },
  {
    name: weekDays[4],
    id: 5,
    data: dailyForecast(weather, 4),
    icon: forecastByDaysIcon(weather, 4),
  },
  {
    name: weekDays[5],
    id: 6,
    data: dailyForecast(weather, 5),
    icon: forecastByDaysIcon(weather, 5),
  },
  {
    name: weekDays[6],
    id: 7,
    data: dailyForecast(weather, 6),
    icon: forecastByDaysIcon(weather, 6),
  },
];

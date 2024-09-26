import { faWind, faDroplet, faCloud } from "@fortawesome/free-solid-svg-icons";

export const currentConditions = (weather) => [
  {
    name: "wind",
    icon: faWind,
    description: weather?.current?.wind_speed,
    measurement: "km/h",
  },
  {
    name: "humidity",
    icon: faDroplet,
    description: weather?.current?.humidity,
    measurement: "%",
  },
  {
    name: "clouds",
    icon: faCloud,
    description: weather?.current?.clouds,
    measurement: "%",
  },
];
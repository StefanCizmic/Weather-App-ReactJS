import { faWind, faDroplet, faCloud } from "@fortawesome/free-solid-svg-icons";

export const currentConditions = (weather) => [
  {
    name: "wind",
    icon: faWind,
    description: weather?.wind?.speed,
    measurement: "km/h",
  },
  {
    name: "humidity",
    icon: faDroplet,
    description: weather?.main?.humidity,
    measurement: "%",
  },
  {
    name: "clouds",
    icon: faCloud,
    description: weather?.clouds?.all,
    measurement: "%",
  },
];
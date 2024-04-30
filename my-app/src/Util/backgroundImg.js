import clear from "../Images/Backgrounds/clear.avif";
import clouds from "../Images/Backgrounds/clouds.avif";
import rain from "../Images/Backgrounds/rain.avif";
import snow from "../Images/Backgrounds/snow.avif";
import drizzle from "../Images/Backgrounds/drizzle.avif";
import haze from "../Images/Backgrounds/haze.avif";
import mist from "../Images/Backgrounds/mist.avif";
import night from "../Images/Backgrounds/night.avif";

export const backgroundImg = (
  data,
  backgroundRef,
  sunrise,
  sunset,
  current
) => {
  const weatherCondition = data?.current?.weather[0]?.main;

  if (current < sunrise || current >= sunset) {
    backgroundRef.current.style.backgroundImage = `url(${night})`;
  } else {
    switch (weatherCondition) {
      case "Clear":
        backgroundRef.current.style.backgroundImage = `url(${clear})`;
        break;
      case "Clouds":
        backgroundRef.current.style.backgroundImage = `url(${clouds})`;
        break;
      case "Rain" && 'Thunderstorm':
        backgroundRef.current.style.backgroundImage = `url(${rain})`;
        break;
      case "Snow":
        backgroundRef.current.style.backgroundImage = `url(${snow})`;
        break;
      case "Drizzle":
        backgroundRef.current.style.backgroundImage = `url(${drizzle})`;
        break;
      case "Haze":
        backgroundRef.current.style.backgroundImage = `url(${haze})`;
      case "Mist":
        backgroundRef.current.style.backgroundImage = `url(${mist})`;
        break;
      default:
        backgroundRef.current.style.backgroundImage = `url(${clear})`;
        break;
    }
  }
};

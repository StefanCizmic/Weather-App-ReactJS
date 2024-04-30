import sunIcon from "../Images/Icons/sunIcon.png";
import cloudsIcon from "../Images/Icons/cloudsIcon.png";
import rainIcon from "../Images/Icons/rainIcon.png";
import snowIcon from "../Images/Icons/snowIcon.png";
import mistIcon from "../Images/Icons/mistIcon.png";

export const forecastByDaysIcon = (weather, day) => {
  
  const dailyCondition = weather?.daily[day].weather[0]?.main;

  switch (dailyCondition) {
    case "Clear":
      return <img src={sunIcon} alt="sunIcon" />;
      break;
    case "Clouds":
      return <img src={cloudsIcon} alt="cloudsIcon" />;
      break;
    case "Rain" || "Drizzle":
      return <img src={rainIcon} alt="cloudsIcon" />;
      break;
    case "Snow":
      return <img src={snowIcon} alt="cloudsIcon" />;
      break;
    case "Haze" || "Mist":
      return <img src={mistIcon} alt="cloudsIcon" />;
      break;
    default:
      break;
  }
};

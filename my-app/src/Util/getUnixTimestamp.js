
export const unixTimestamp = (data) => {

  const currentTime = new Date(); 
  const currentHours = currentTime.getHours();
  const currentMinutes = currentTime.getMinutes();

  const timestamp = {
    sunrise: data.current.sunrise,
    sunset: data.current.sunset,
  };

  const sunriseHours = new Date(timestamp.sunrise * 1000).getHours();
  const sunriseMinutes = new Date(timestamp.sunrise * 1000).getMinutes();
  const sunsetHours = new Date(timestamp.sunset * 1000).getHours();
  const sunsetMinutes = new Date(timestamp.sunset * 1000).getMinutes();

  const sunrise = sunriseHours * 60 + sunriseMinutes; 
  const sunset = sunsetHours * 60 + sunsetMinutes; 
  const current = currentHours * 60 + currentMinutes;
  
  return {
    sunrise,
    sunset,
    current
  }
};



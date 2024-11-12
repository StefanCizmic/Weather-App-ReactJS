const apiKey = "a3f19ade81ebf491ce2d6744becd8731";

export const getWeather = async (coordinates, units) => {
  const apiAddress = `https://api.openweathermap.org/data/2.5/weather?lat=${coordinates.latitude}&lon=${coordinates.longitude}&units=${units}&appid=${apiKey}`;

  const data = await fetch(apiAddress);
  const response = await data.json();
  return response;
};

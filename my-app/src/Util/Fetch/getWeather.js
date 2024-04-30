const apiKey = "0974d184cb2d8d0c23bc45b4780d0025";

export const getWeather = async (coordinates, units) => {
  
  const apiAddress = `https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates?.latitude}&lon=${coordinates?.longitude}&units=${units}&appid=${apiKey}`;

  const data = await fetch(apiAddress);
  const response = await data.json();

  return response;
};

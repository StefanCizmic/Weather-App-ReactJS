const apiKey = "1edd361d631129a4a53770467f60e6a7";

export const getWeeklyWeather = async (coordinates, units) => {
  const apiAddress = `https://api.openweathermap.org/data/2.5/forecast?lat=${coordinates.latitude}&lon=${coordinates.longitude}&units=${units}&appid=${apiKey}`;

  const data = await fetch(apiAddress);
  const response = await data.json();

  return response;
};

export const getWeekly = (weeklyWeather) => {
    
    const days = {};
    
    weeklyWeather.list.forEach((item) => {
      const date = new Date(item.dt_txt).toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "2-digit",
      });
    
      if (!days[date]) {
        days[date] = { maxTemp: item.main.temp, minTemp: item.main.temp, wind: item.wind.deg, pressure: item.main.pressure, groundLevel: item.main.grnd_level, seaLevel: item.main.sea_level};
      } else {
        days[date].maxTemp = Math.max(days[date].maxTemp, item.main.temp);
        days[date].minTemp = Math.min(days[date].minTemp, item.main.temp);
      }
    });
    
    return Object.keys(days).map((date) => ({
      date,
      maxTemp: Math.round(days[date].maxTemp),
      minTemp: Math.round(days[date].minTemp),
      wind: days[date].wind,
      pressure: days[date].pressure,
      groundLevel: days[date].groundLevel,
      seaLevel:  days[date].seaLevel
    }));
  };
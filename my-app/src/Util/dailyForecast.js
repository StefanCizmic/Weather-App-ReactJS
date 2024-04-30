
export const dailyForecast = (weather, day) => {
 const daily = {
        maxTemp: Math.round(weather?.daily[day].temp.max),
        minTemp: Math.round(weather?.daily[day].temp.min),
        wind: weather?.daily[day].wind_speed,
        pressure: weather?.daily[day].pressure,
        cloudCover: weather?.daily[day].clouds,
        uvi: weather?.daily[day].uvi,
        night: Math.round(weather?.daily[day].temp.night),
    }
    return daily;
}
import img from '../Images/Backgrounds/clear.avif';

export const getLocation = ({setCurrentLocation, getWeather, unixTimestamp, getBackgroundImg, setCurrentTimestamp, backgroundRef}) => {
    const success = async (pos) => {
        const coords = pos.coords;
        const currentPosition = {
          latitude: coords.latitude,
          longitude: coords.longitude,
        };
        if (currentPosition) {
        setCurrentLocation(currentPosition);
        const currentData = await getWeather(currentPosition);
        if (currentData) {
          const timeOfDay = unixTimestamp(currentData);
          getBackgroundImg(
            currentData,
            backgroundRef,
            timeOfDay.sunrise,
            timeOfDay.sunset,
            timeOfDay.current
          );
          setCurrentTimestamp(timeOfDay);
        }
      } else {
        backgroundRef.current.style.backgroundImage = `url(${img})`;
      }
      };
      navigator.geolocation.getCurrentPosition(success);
}
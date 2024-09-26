
export const getMeasurement = ({units, setMeasurement}) => {
    localStorage.setItem("units", JSON.stringify(units));
    if (units === "metric") {
      setMeasurement(`${"\u00B0"}C`);
    } else if (units === "imperial") {
      setMeasurement(`${"\u00B0"}F`);
    } else;
}
import cities from "cities.json";

export const getFilteredCities = (typedText, setFilteredCities, screenWidth) => {
  if (typedText.length > 1) {
    const filtered = cities
      .filter((city) => city.name.toLowerCase().startsWith(typedText))
      .slice(0, screenWidth < 768 ? 3 : 6);
    setFilteredCities(filtered);
  } else {
    setFilteredCities([]);
  }
};
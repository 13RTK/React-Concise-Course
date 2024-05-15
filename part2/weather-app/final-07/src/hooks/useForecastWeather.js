import { useEffect } from "react";
import { useState } from "react";
import { getForecastWeather } from "../services/apiWeather";

export function useForecastWeather(position) {
  const [weatherForecastList, setWeatherForecastList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  async function loadForecastData() {
    setIsLoading(true);

    const weatherData = await getForecastWeather(
      position.latitude,
      position.longitude
    );

    const weatherDataList = weatherData.list;

    const filteredForecastList = weatherDataList
      .map((weatherData) => {
        const weather = weatherData.weather[0];

        return {
          weatherIcon: `https://openweathermap.org/img/wn/${weather.icon}@2x.png`,
          weather: weather.main,
          min: weatherData.main.temp_max,
          max: weatherData.main.temp_min,
          date: weatherData.dt_txt,
        };
      })
      .filter((weatherData) => weatherData.date.includes("12:00:00"))
      .filter((weatherData) => {
        const curDate = new Date().getDate();
        const weatherDate = new Date(weatherData.date).getDate();

        return curDate !== weatherDate;
      });

    setWeatherForecastList(filteredForecastList);

    setIsLoading(false);
  }

  useEffect(() => {
    loadForecastData();
  }, []);

  return { isLoading, weatherForecastList };
}

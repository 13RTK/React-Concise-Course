import { useState, useEffect } from "react";
import { useGeolocation } from "./useGeolocation";

import { getCurrentWeather } from "../services/apiWeather";

export function useCurrentWeather() {
  const { getCurrentLocation } = useGeolocation();

  const [temperature, setTemperature] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [weatherIcon, setWeatherIcon] = useState("");

  useEffect(() => {
    async function loadData() {
      setIsLoading(true);

      const position = await getCurrentLocation();

      const weatherData = await getCurrentWeather(
        position.latitude,
        position.longitude
      );

      setTemperature({
        max: weatherData.main.temp_max,
        min: weatherData.main.temp_min,
      });
      setWeatherIcon(weatherData.weather[0].icon);

      setIsLoading(false);
    }

    loadData();
  }, []);

  return { temperature, isLoading, weatherIcon };
}

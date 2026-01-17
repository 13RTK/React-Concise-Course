import useSWRMutation from 'swr/mutation';
import { currentWeatherFetcher } from '../utils/fetcher.js';

const API_URL = import.meta.env.VITE_API_URL;
const API_KEY = import.meta.env.VITE_API_KEY;

export default function useCurrentWeather(getPosition) {
  const { trigger, data, isMutating, error } = useSWRMutation(
    API_URL,
    currentWeatherFetcher,
  );

  async function getCurrentWeather() {
    const position = await getPosition();
    const { latitude: lat, longitude: lon } = position;

    await trigger({ path: 'weather', lat, lon, apiKey: API_KEY });
  }

  return { getCurrentWeather, data, isMutating, error };
}

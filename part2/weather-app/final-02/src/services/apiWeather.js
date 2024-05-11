const API_KEY = "YOUR_API_KEY";

export async function getCurrentWeather(lat, lon) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`
    );

    const data = response.json();
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
}

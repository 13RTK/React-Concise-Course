export async function currentWeatherFetcher(url, { arg }) {
  const { path, lat, lon, apiKey } = arg;

  const response = await fetch(
    `${url}/${path}?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`,
  );

  return await response.json();
}

export async function forecastWeatherFetcher(...args) {
  const response = await fetch(...args);

  return await response.json();
}

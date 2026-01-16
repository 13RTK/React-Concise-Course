export default async function (url, { arg }) {
  const { path, lat, lon, apiKey } = arg;

  const response = await fetch(
    `${url}/${path}?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
  );

  return await response.json();
}

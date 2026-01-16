// Current weather
// https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}

// Weather icon URL
// https://openweathermap.org/img/wn/{weather icon}@2x.png

function Day({ temperature = { min: 0, max: 100 }, iconCode = '10n' }) {
  const weatherIconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
  const { min, max } = temperature;

  return (
    <li className="day">
      <img src={weatherIconUrl} />
      <p>Today</p>
      <p>
        {Math.floor(min)}&deg; &mdash; {Math.ceil(max)}
        &deg;
      </p>
    </li>
  );
}
export default Day;

// Current weather
// https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}

// Weather icon URL
// https://openweathermap.org/img/wn/{weather icon}@2x.png

function Day({ temperature, icon }) {
  const weatherIconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;

  return (
    <li className="day">
      <img src={weatherIconUrl} />
      <p>Today</p>
      <p>
        {Math.floor(temperature.min)}&deg; &mdash; {Math.ceil(temperature.max)}
        &deg;
      </p>
    </li>
  );
}
export default Day;

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

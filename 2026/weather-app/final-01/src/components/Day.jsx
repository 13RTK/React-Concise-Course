// Current weather
// https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}

// Weather icon URL
// https://openweathermap.org/img/wn/{weather icon}@2x.png

function Day({ date = '2024-04-03', max = 20.1, min = 10.2, code = '10n' }) {
  const isToday = date === new Date().toISOString().split('T')[0];
  const weatherIconUrl = `https://openweathermap.org/img/wn/${code}@2x.png`;

  function formatDay(dateStr) {
    return new Intl.DateTimeFormat('en', {
      weekday: 'short',
    }).format(new Date(dateStr));
  }

  return (
    <li className="day">
      <img src={weatherIconUrl} />
      <p>{isToday ? 'Today' : formatDay(date)}</p>
      <p>
        {Math.floor(min)}&deg; &mdash; {Math.ceil(max)}
        &deg;
      </p>
    </li>
  );
}
export default Day;

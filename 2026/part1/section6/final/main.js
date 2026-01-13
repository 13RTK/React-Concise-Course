const cities = [
  {
    id: 1,
    name: "New York",
    country: "USA",
    forecast: [
      { date: "2024-04-03", temperature: 15, weather: "Partly cloudy" },
      { date: "2024-04-04", temperature: 17, weather: "Sunny" },
      { date: "2024-04-05", temperature: 18, weather: "Partly cloudy" },
      { date: "2024-04-06", temperature: 20, weather: "Rain" },
      { date: "2024-04-07", temperature: 16, weather: "Thunderstorms" },
      { date: "2024-04-08", temperature: 14, weather: "Cloudy" },
      { date: "2024-04-09", temperature: 13, weather: "Partly cloudy" },
    ],
  },
  {
    id: 2,
    name: "London",
    country: "UK",
    forecast: [
      { date: "2024-04-03", temperature: 12, weather: "Cloudy" },
      { date: "2024-04-04", temperature: 14, weather: "Rain" },
      { date: "2024-04-05", temperature: 15, weather: "Partly cloudy" },
      { date: "2024-04-06", temperature: 13, weather: "Sunny" },
      { date: "2024-04-07", temperature: 11, weather: "Cloudy" },
      { date: "2024-04-08", temperature: 10, weather: "Rain" },
      { date: "2024-04-09", temperature: 12, weather: "Partly cloudy" },
    ],
  },
  {
    id: 3,
    name: "Tokyo",
    country: "Japan",
    forecast: [
      { date: "2024-04-03", temperature: 20, weather: "Sunny" },
      { date: "2024-04-04", temperature: 21, weather: "Partly cloudy" },
      { date: "2024-04-05", temperature: 22, weather: "Cloudy" },
      { date: "2024-04-06", temperature: 19, weather: "Rain" },
      { date: "2024-04-07", temperature: 18, weather: "Partly cloudy" },
      { date: "2024-04-08", temperature: 17, weather: "Sunny" },
      { date: "2024-04-09", temperature: 20, weather: "Cloudy" },
    ],
  },

  {
    id: 4,
    name: "Sydney",
    country: "Australia",
    forecast: [],
  },

  {
    id: 5,
    name: "Beijing",
    country: "China",
  },
];

function MyApp() {
  function renderForecastList(forecastList) {
    return forecastList.map((forecast) => (
      <ul key={forecast.date}>
        <li>
          {forecast.date}
          <span>
            {" "}
            temperature: {forecast.temperature}℃({forecast.weather})
          </span>
        </li>
      </ul>
    ));
  }

  function isForecastExists(forecastList) {
    return forecastList && forecastList.length > 0;
  }

  return (
    <main>
      {cities.map((city) => (
        <section key={city.id} className="city">
          <h2>{city.country}</h2>
          <h3>{city.name}</h3>

          {isForecastExists(city.forecast) && renderForecastList(city.forecast)}
          {!isForecastExists(city.forecast) && <span>No forecast</span>}
        </section>
      ))}
    </main>
  );
}

const appEl = document.querySelector("#app");
const root = ReactDOM.createRoot(appEl);

root.render(<MyApp />);

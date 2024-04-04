function MyApp() {
  const cities = [
    {
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
      name: "Sydney",
      country: "Australia",
      forecast: [],
    },

    {
      name: "Beijing",
      country: "China",
    },
  ];

  return (
    <main>
      {cities.map((city) => (
        <section className="city">
          {/* Country */}
          <h2>{city.country}</h2>

          {/* City */}
          <h3>{city.name}</h3>

          {city.forecast && city.forecast.length > 0 ? (
            <ul>
              {city.forecast.map((day) => (
                <li>
                  {/* date */}
                  {day.date}
                  {/* temperature and weather */}
                  <span>
                    temperature: {day.temperature}℃(
                    {day.weather})
                  </span>
                </li>
              ))}
            </ul>
          ) : (
            <div>No Data</div>
          )}
        </section>
      ))}
    </main>
  );
}

const appEl = document.querySelector("#app");
const root = ReactDOM.createRoot(appEl);

root.render(<MyApp />);

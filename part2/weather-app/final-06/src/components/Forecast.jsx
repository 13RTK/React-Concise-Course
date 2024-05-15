import {
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Link,
  Breadcrumbs,
} from "@mui/material";
import Avatar from "@mui/material/Avatar";
import { useEffect, useState } from "react";
import { getForecastWeather } from "../services/apiWeather";

// Weather forecast
// https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}

function Forecast({ setIsHome, position }) {
  const [weatherForecastList, setWeatherForecastList] = useState([]);

  function formatDay(dateStr) {
    return new Intl.DateTimeFormat("en", {
      weekday: "short",
    }).format(new Date(dateStr));
  }

  async function loadForecastData() {
    const weatherData = await getForecastWeather(
      position.latitude,
      position.longitude
    );

    const weatherDataList = weatherData.list;

    const filteredForecastList = weatherDataList
      .map((weatherData) => {
        const weather = weatherData.weather[0];

        return {
          weatherIcon: `https://openweathermap.org/img/wn/${weather.icon}@2x.png`,
          weather: weather.main,
          min: weatherData.main.temp_max,
          max: weatherData.main.temp_min,
          date: weatherData.dt_txt,
        };
      })
      .filter((weatherData) => weatherData.date.includes("12:00:00"))
      .filter((weatherData) => {
        const curDate = new Date().getDate();
        const weatherDate = new Date(weatherData.date).getDate();

        return curDate !== weatherDate;
      });

    setWeatherForecastList(filteredForecastList);
  }

  useEffect(() => {
    loadForecastData();
  }, []);

  return (
    <>
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" href="#" onClick={() => setIsHome(true)}>
          Home
        </Link>
        <Link underline="always" color="inherit" href="#">
          Forecast
        </Link>
      </Breadcrumbs>

      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        {weatherForecastList.map((weatherForecast, idx) => (
          <ListItem key={idx}>
            <ListItemAvatar>
              <Avatar>
                <img width={48} src={weatherForecast.weatherIcon} alt="" />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={weatherForecast.weather}
              secondary={formatDay(weatherForecast.date)}
            />
            <span>
              {Math.floor(weatherForecast.min)}&deg;/
              {Math.ceil(weatherForecast.max)}
              &deg;
            </span>
          </ListItem>
        ))}
      </List>
    </>
  );
}
export default Forecast;

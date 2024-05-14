import {
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Link,
  Breadcrumbs,
  Typography,
} from "@mui/material";
import Avatar from "@mui/material/Avatar";
import { useEffect } from "react";
import { getForecastWeather } from "../services/apiWeather";

// Weather forecast
// https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}

function Forecast({ setIsHome, position }) {
  const weatherForecasts = [
    {
      id: 1,
      weatherIcon: "https://openweathermap.org/img/wn/10n@2x.png",
      min: "20",
      max: "30",
      weather: "Rain",
      date: "2024-04-03",
    },
    {
      id: 2,
      weatherIcon: "https://openweathermap.org/img/wn/10n@2x.png",
      min: "20",
      max: "30",
      weather: "Rain",
      date: "2024-04-03",
    },
    {
      id: 3,
      weatherIcon: "https://openweathermap.org/img/wn/10n@2x.png",
      min: "20",
      max: "30",
      weather: "Rain",
      date: "2024-04-03",
    },
    {
      id: 4,
      weatherIcon: "https://openweathermap.org/img/wn/10n@2x.png",
      min: "20",
      max: "30",
      weather: "Rain",
      date: "2024-04-03",
    },
  ];

  async function loadForecastData() {
    const weatherData = await getForecastWeather(
      position.latitude,
      position.longitude
    );

    console.log(weatherData);
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
        {weatherForecasts.map((weatherForecast) => (
          <ListItem key={weatherForecast.id}>
            <ListItemAvatar>
              <Avatar>
                <img width={48} src={weatherForecast.weatherIcon} alt="" />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={weatherForecast.weather}
              secondary={weatherForecast.date}
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

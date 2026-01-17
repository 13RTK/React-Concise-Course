import {
  Fab,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from '@mui/material';
import Avatar from '@mui/material/Avatar';
import HomeIcon from '@mui/icons-material/Home';
import useSWR from 'swr';
import { forecastWeatherFetcher } from '../utils/fetcher';

function Forecast({ position, setIsHome }) {
  const weatherForecasts = [
    {
      id: 1,
      weatherIcon: 'https://openweathermap.org/img/wn/10n@2x.png',
      min: '20',
      max: '30',
      weather: 'Rain',
      date: '2024-04-03',
    },
    {
      id: 2,
      weatherIcon: 'https://openweathermap.org/img/wn/10n@2x.png',
      min: '20',
      max: '30',
      weather: 'Rain',
      date: '2024-04-03',
    },
    {
      id: 3,
      weatherIcon: 'https://openweathermap.org/img/wn/10n@2x.png',
      min: '20',
      max: '30',
      weather: 'Rain',
      date: '2024-04-03',
    },
    {
      id: 4,
      weatherIcon: 'https://openweathermap.org/img/wn/10n@2x.png',
      min: '20',
      max: '30',
      weather: 'Rain',
      date: '2024-04-03',
    },
  ];

  const fabStyle = {
    position: 'absolute',
    bottom: 16,
    right: 16,
  };

  const API_URL = import.meta.env.VITE_API_URL;
  const API_KEY = import.meta.env.VITE_API_KEY;

  const lat = position?.latitude;
  const lon = position?.longitude;

  const { data, error } = useSWR(
    `${API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`,
    forecastWeatherFetcher,
    {
      onSuccess: (data) => console.log(data),
    },
  );

  return (
    <>
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
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

      <Fab
        sx={fabStyle}
        color="primary"
        aria-label="add"
        onClick={() => setIsHome(true)}
      >
        <HomeIcon />
      </Fab>
    </>
  );
}
export default Forecast;

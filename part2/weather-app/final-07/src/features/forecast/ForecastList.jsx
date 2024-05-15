import {
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
} from "@mui/material";

function ForecastList({ weatherForecastList }) {
  function formatDay(dateStr) {
    return new Intl.DateTimeFormat("en", {
      weekday: "short",
    }).format(new Date(dateStr));
  }

  return (
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
  );
}

export default ForecastList;

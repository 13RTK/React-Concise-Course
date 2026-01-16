import { Button } from '@mui/material';

import styles from './CurrentWeather.module.css';
import Day from './Day';

function CurrentWeather({ data, status, setIsHome }) {
  return (
    <section className={styles.section}>
      <Day
        temperature={{ max: data.main.temp_max, min: data.main.temp_min }}
        iconCode={data.weather[0].icon}
      />
      <Button variant="contained" size="large" onClick={() => setIsHome(false)}>
        {status}
      </Button>
    </section>
  );
}

export default CurrentWeather;

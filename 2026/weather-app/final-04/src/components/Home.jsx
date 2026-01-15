import { Button } from '@mui/material';
import Day from './Day';
import styles from './Home.module.css';
import Welcome from './Welcome.jsx';
import useCurrentWeather from '../hooks/useCurrentWeather.js';

function Home({ getPosition, status }) {
  const { data, isMutating, getCurrentWeather } =
    useCurrentWeather(getPosition);

  return (
    <section className={styles.section}>
      {data && (
        <Day
          temperature={{ max: data.main.temp_max, min: data.main.temp_min }}
          iconCode={data.weather[0].icon}
        />
      )}
      {!data && <Welcome>Welcome To Alex Weather App</Welcome>}
      <Button
        disabled={isMutating}
        variant="contained"
        size="large"
        onClick={getCurrentWeather}
      >
        {status}
      </Button>
    </section>
  );
}
export default Home;

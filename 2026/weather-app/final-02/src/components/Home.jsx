import { Button } from '@mui/material';
import Day from './Day';
import styles from './Home.module.css';
import { getCurrentWeather } from '../services/apiWeather.js';

function Home({ getCurrentLocation, status, setIsHome }) {
  const isLocationLoaded = status.toLowerCase().includes('forecast');

  async function useCurrentWeather() {
    const position = await getCurrentLocation();
    const data = await getCurrentWeather(position.latitude, position.longitude);

    console.log(data);
  }

  return (
    <section className={styles.section}>
      <Day />
      <Button
        variant="contained"
        size="large"
        onClick={isLocationLoaded ? () => setIsHome(false) : useCurrentWeather}
      >
        {status}
      </Button>
    </section>
  );
}
export default Home;

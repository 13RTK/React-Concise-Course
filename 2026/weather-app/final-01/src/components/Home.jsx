import { Button } from '@mui/material';
import Day from './Day';
import styles from './Home.module.css';

function Home({ getCurrentLocation, status, setIsHome }) {
  const isLocationLoaded = status.toLowerCase().includes('forecast');

  return (
    <section className={styles.section}>
      <Day />
      <Button
        variant="contained"
        size="large"
        onClick={isLocationLoaded ? () => setIsHome(false) : getCurrentLocation}
      >
        {status}
      </Button>
    </section>
  );
}
export default Home;

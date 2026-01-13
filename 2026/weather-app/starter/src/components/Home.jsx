import { Button } from '@mui/material';
import Day from './Day';
import styles from './Home.module.css';

function Home() {
  return (
    <section className={styles.section}>
      <Day />
      <Button variant="contained" size="large">
        Get Start
      </Button>
    </section>
  );
}
export default Home;

import { Button, CircularProgress } from "@mui/material";

import styles from "./Home.module.css";

import { useCurrentWeather } from "../hooks/useCurrentWeather";

import Day from "./Day";

function Home() {
  const { temperature, weatherIcon, isLoading } = useCurrentWeather();

  return (
    <section className={styles.section}>
      {isLoading && <CircularProgress />}
      {!isLoading && (
        <>
          <Day temperature={temperature} icon={weatherIcon} />
          <Button variant="contained" size="large">
            Get Start
          </Button>
        </>
      )}
    </section>
  );
}
export default Home;

import { Button, CircularProgress } from "@mui/material";

import styles from "./Home.module.css";

import { useCurrentWeather } from "../hooks/useCurrentWeather";

import Day from "./Day";

function Home({ setIsHome, position }) {
  const { temperature, weatherIcon, isLoading } = useCurrentWeather(position);

  return (
    <section className={styles.section}>
      {isLoading && <CircularProgress />}
      {!isLoading && (
        <>
          <Day temperature={temperature} icon={weatherIcon} />
          <Button
            variant="contained"
            size="large"
            onClick={() => setIsHome(false)}
          >
            Get Start
          </Button>
        </>
      )}
    </section>
  );
}
export default Home;

import { useEffect } from "react";

import { Button } from "@mui/material";

import Day from "./Day";
import styles from "./Home.module.css";
import { useGeolocation } from "../hooks/useGeolocation";
import { getCurrentWeather } from "../services/apiWeather";

function Home() {
  const { getCurrentLocation } = useGeolocation();

  useEffect(() => {
    async function loadData() {
      const position = await getCurrentLocation();

      const weatherData = await getCurrentWeather(
        position.latitude,
        position.longitude
      );
      console.log("weatherData: ", weatherData);
    }

    loadData();
  }, []);

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

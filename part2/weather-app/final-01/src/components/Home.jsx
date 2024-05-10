import { useEffect } from "react";

import { Button } from "@mui/material";

import Day from "./Day";
import styles from "./Home.module.css";
import { useGeolocation } from "../hooks/useGeolocation";

function Home() {
  const { position, getCurrentLocation } = useGeolocation();

  useEffect(() => {
    getCurrentLocation();
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

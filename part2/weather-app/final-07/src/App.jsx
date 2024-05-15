import { useEffect, useState } from "react";

import { useGeolocation } from "./hooks/useGeolocation";

import Container from "./ui/Container";
import Loading from "./ui/Loading";

import Forecast from "./features/forecast/Forecast";
import Home from "./features/home/Home";

function App() {
  const { getCurrentLocation, isLoading, position } = useGeolocation();

  const [isHome, setIsHome] = useState(true);

  useEffect(() => {
    getCurrentLocation();
  }, []);

  return (
    <Container>
      {isLoading ? (
        <Loading />
      ) : isHome ? (
        <Home setIsHome={setIsHome} position={position} />
      ) : (
        <Forecast setIsHome={setIsHome} position={position} />
      )}
    </Container>
  );
}

export default App;

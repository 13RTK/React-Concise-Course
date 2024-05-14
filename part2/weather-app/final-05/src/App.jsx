import { useEffect, useState } from "react";

import Container from "./components/Container";
import Forecast from "./components/Forecast";
import Home from "./components/Home";
import { useGeolocation } from "./hooks/useGeolocation";
import Loading from "./components/Loading";

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

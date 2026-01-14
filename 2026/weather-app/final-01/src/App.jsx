import { useState } from 'react';
import Container from './components/Container';
import Forecast from './components/Forecast';
import Home from './components/Home';
import useGeolocation from './hooks/useGeolocation.js';

function App() {
  const { position, getCurrentLocation, status } = useGeolocation();

  const [isHome, setIsHome] = useState(true);

  return (
    <Container>
      {isHome && (
        <Home
          getCurrentLocation={getCurrentLocation}
          status={status}
          setIsHome={setIsHome}
        />
      )}
      {!isHome && <Forecast />}
    </Container>
  );
}

export default App;

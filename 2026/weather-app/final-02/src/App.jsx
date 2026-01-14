import { useState } from 'react';
import Container from './components/Container.jsx';
import Forecast from './components/Forecast.jsx';
import Home from './components/Home.jsx';
import useGeolocation from './hooks/useGeolocation.js';

function App() {
  const { getCurrentLocation, status } = useGeolocation();

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

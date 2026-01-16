import { useState } from 'react';
import Container from './components/Container';
import Forecast from './components/Forecast';
import Home from './components/Home';
import useGeolocation from './hooks/useGeolocation.js';

function App() {
  const { getPosition, status, position } = useGeolocation();

  const [isHome, setIsHome] = useState(true);

  return (
    <Container>
      {isHome && (
        <Home getPosition={getPosition} status={status} setIsHome={setIsHome} />
      )}
      {!isHome && <Forecast position={position} setIsHome={setIsHome} />}
    </Container>
  );
}

export default App;

import { useState, Activity } from 'react';

import Container from './components/Container.jsx';
import Forecast from './components/Forecast.jsx';
import Home from './components/Home.jsx';

import useGeolocation from './hooks/useGeolocation.js';

function App() {
  const { getPosition, status, position } = useGeolocation();

  const [isHome, setIsHome] = useState(true);

  return (
    <Container>
      <Activity mode={isHome ? 'visible' : 'hidden'}>
        <Home getPosition={getPosition} status={status} setIsHome={setIsHome} />
      </Activity>

      <Activity mode={isHome ? 'hidden' : 'visible'}>
        <Forecast position={position} setIsHome={setIsHome} />
      </Activity>
    </Container>
  );
}

export default App;

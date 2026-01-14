import Container from './components/Container';
import Forecast from './components/Forecast';
import Home from './components/Home';
import useGeolocation from './hooks/useGeolocation.js';

function App() {
  const { getPosition, status } = useGeolocation();

  return (
    <Container>
      <Home getPosition={getPosition} status={status} />
      {/* <Forecast /> */}
    </Container>
  );
}

export default App;

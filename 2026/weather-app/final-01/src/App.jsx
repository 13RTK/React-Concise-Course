import Container from './components/Container';
import Forecast from './components/Forecast';
import Home from './components/Home';
import useGeolocation from './hooks/useGeolocation.js';

function App() {
  const position = useGeolocation();

  return (
    <Container>
      <Home />
      {/* <Forecast /> */}
    </Container>
  );
}

export default App;

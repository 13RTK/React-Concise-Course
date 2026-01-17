import { Button } from '@mui/material';
import Welcome from './Welcome.jsx';
import useCurrentWeather from '../hooks/useCurrentWeather.js';
import CurrentWeather from './CurrentWeather.jsx';

function Home({ getPosition, status, setIsHome }) {
  const { data, isMutating, getCurrentWeather } =
    useCurrentWeather(getPosition);

  if (data) {
    return <CurrentWeather data={data} status={status} setIsHome={setIsHome} />;
  }

  return (
    <>
      <Welcome>
        {isMutating ? 'Loading...' : 'Welcome To Alex Weather App'}
      </Welcome>
      <Button
        disabled={isMutating}
        variant="contained"
        size="large"
        onClick={getCurrentWeather}
      >
        {status}
      </Button>
    </>
  );
}
export default Home;

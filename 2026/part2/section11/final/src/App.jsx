import useSWR from 'swr';
import useTime from './useTime.js';

function App() {
  const adviceURL = 'https://api.adviceslip.com/advice';
  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, isLoading, mutate: getAdvice } = useSWR(adviceURL, fetcher);
  const currentTime = useTime();

  return (
    <main>
      <h1>Advice App</h1>
      <span>{currentTime}</span>
      <p>{isLoading ? 'Loading...' : data.slip?.advice}</p>
      <button disabled={isLoading} onClick={getAdvice}>
        Get Advice
      </button>
    </main>
  );
}

export default App;

import { useState } from 'react';
import useSWR from 'swr';

function App() {
  const adviceURL = 'https://api.adviceslip.com/advice';
  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, isLoading, mutate: getAdvice } = useSWR(adviceURL, fetcher);

  const [currentTime, setCurrentTime] = useState(new Date().toLocaleString());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date().toLocaleString());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

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

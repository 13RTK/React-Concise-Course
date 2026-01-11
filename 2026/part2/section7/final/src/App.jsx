import { useEffect, useState } from 'react';

function App() {
  const adviceURL = 'https://api.adviceslip.com/advice';

  const [advice, setAdvice] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  async function getAdvice() {
    setIsLoading(true);

    const response = await fetch(adviceURL);
    const data = await response.json();

    setIsLoading(false);
    setAdvice(data.slip.advice);
  }

  useEffect(() => {
    getAdvice();
  }, []);

  return (
    <main>
      <h1>Advice App</h1>
      <p>{isLoading ? 'Loading...' : advice}</p>
      <button disabled={isLoading} onClick={getAdvice}>
        Get Advice
      </button>
    </main>
  );
}

export default App;

import { useEffect, useState } from "react";

function App() {
  const [advice, setAdvice] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [currentTime, setCurrentTime] = useState(new Date().toLocaleString());

  async function getAdvice() {
    setIsLoading(true);

    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json();

    setIsLoading(false);
    setAdvice(data.slip.advice);
  }

  useEffect(() => {
    getAdvice();

    const interval = setInterval(() => {
      setCurrentTime(new Date().toLocaleString());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <h1>Advice</h1>
      <div>{currentTime}</div>
      <div>{isLoading ? "Loading..." : advice}</div>
      <button onClick={getAdvice}>Get Advice</button>
    </>
  );
}

export default App;

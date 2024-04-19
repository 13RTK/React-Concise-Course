import { useEffect, useState } from "react";

function App() {
  const [advice, setAdvice] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getAdvice() {
      const response = await fetch("https://api.adviceslip.com/advice");
      const data = await response.json();

      setAdvice(data.slip.advice);
    }

    getAdvice();
  }, [setAdvice]);

  return (
    <>
      <h1>Advice</h1>
      <div>{advice}</div>
    </>
  );
}

export default App;

import { useEffect, useState } from "react";

export function useAdvice() {
  const [advice, setAdvice] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function getAdvice() {
    setIsLoading(true);

    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json();

    setIsLoading(false);
    setAdvice(data.slip.advice);
  }

  useEffect(() => {
    getAdvice();
  }, []);

  return { isLoading, advice, getAdvice };
}

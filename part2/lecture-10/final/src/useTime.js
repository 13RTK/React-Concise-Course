import { useEffect, useState } from "react";

export function useTime() {
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleString());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date().toLocaleString());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return { currentTime };
}

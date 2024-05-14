import { useState } from "react";

export function useGeolocation() {
  const [isLoading, setIsLoading] = useState(true);
  const [position, setPosition] = useState(null);

  async function getCurrentLocation() {
    return new Promise((resolve, reject) => {
      setIsLoading(true);

      if (!navigator.geolocation) {
        setIsLoading(false);
        reject("Your browser does not support geolocation");
      }

      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;

          setIsLoading(false);
          setPosition({ latitude, longitude });
          resolve();
        },
        (error) => {
          setIsLoading(false);
          reject(error.message);
        }
      );
    });
  }

  return { getCurrentLocation, position, isLoading };
}

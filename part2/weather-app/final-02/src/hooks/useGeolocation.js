import { useState } from "react";

export function useGeolocation() {
  const [isLoading, setIsLoading] = useState(false);

  async function getCurrentLocation() {
    return new Promise((resolve, reject) => {
      if (!navigator.geolocation) {
        reject("Your browser does not support geolocation");
      }

      setIsLoading(true);
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;

          resolve({ latitude, longitude });
          setIsLoading(false);
        },
        (error) => {
          setIsLoading(false);
          reject(error.message);
        }
      );
    });
  }

  return { getCurrentLocation, isLoading };
}

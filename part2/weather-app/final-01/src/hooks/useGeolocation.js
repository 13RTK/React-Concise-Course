import { useState } from "react";

export function useGeolocation() {
  const [position, setPosition] = useState(null);

  function getCurrentLocation() {
    if (!navigator.geolocation) {
      alert("Your browser does not support geolocation");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;

        setPosition({ latitude, longitude });
      },
      (error) => {
        throw new Error(error.message);
      }
    );
  }

  return { getCurrentLocation, position };
}

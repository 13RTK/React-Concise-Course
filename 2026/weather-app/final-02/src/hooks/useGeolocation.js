import { useState } from 'react';

export default function () {
  const [status, setStatus] = useState('Get Current Weather');

  async function getCurrentLocation() {
    setStatus('Locating...');

    return new Promise((resolve, reject) => {
      if (!navigator.geolocation) {
        alert('Geolocation is not supported by your browser');
        reject('Geolocation is not supported');
      }

      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setStatus('Get Forecast');
          resolve({ latitude, longitude });
        },
        (error) => {
          console.error(error);
          setStatus(error.message);
          reject(error.message);
        }
      );
    });
  }

  return { getCurrentLocation, status };
}

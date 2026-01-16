import { useState } from 'react';

export default function () {
  const [status, setStatus] = useState('Get Current Weather');
  const [position, setPosition] = useState(null);

  async function getPosition() {
    return new Promise((resolve, reject) => {
      const geolocation = navigator.geolocation;

      setStatus('Locating...');

      if (!geolocation) {
        alert('Geolocation is not supported by your browser');
        reject('Geolocation is not supported by your browser');
        return;
      }

      geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;

          resolve({ latitude, longitude });
          setPosition({ latitude, longitude });
          setStatus('Get Forecast Weather');
        },
        (error) => {
          reject(error);
          alert(error.message);
          console.error(error);
          setStatus(error.message);
        }
      );
    });
  }

  return { getPosition, status, position };
}

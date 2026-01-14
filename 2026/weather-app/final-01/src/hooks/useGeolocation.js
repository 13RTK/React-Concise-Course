import { useState } from 'react';

export default function () {
  const [position, setPosition] = useState(null);
  const [status, setStatus] = useState('Get Current Weather');

  function getCurrentLocation() {
    setStatus('Locating...');

    if (!navigator.geolocation) {
      alert('Geolocation is not supported by your browser');
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setPosition({ latitude, longitude });
        setStatus('Get Forecast');
      },
      (error) => {
        console.error(error);
        setStatus(error.message);
      }
    );
  }

  return { position, getCurrentLocation, status };
}

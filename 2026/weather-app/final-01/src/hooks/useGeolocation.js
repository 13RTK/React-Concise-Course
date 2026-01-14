import { useEffect } from 'react';
import { useState } from 'react';

export default function () {
  const [position, setPosition] = useState(null);

  function getPosition() {
    const geolocation = navigator.geolocation;

    if (!geolocation) {
      alert('Geolocation is not supported by your browser');
      return;
    }

    geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;

        setPosition({ latitude, longitude });
      },
      (error) => {
        alert(error.message);
        console.error(error);
      }
    );
  }

  useEffect(() => {
    getPosition();
  }, []);

  return position;
}

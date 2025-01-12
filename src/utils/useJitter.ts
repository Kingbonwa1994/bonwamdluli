import { useState, useEffect } from 'react';

export function useJitter(intensity: number = 1, frequency: number = 50) {
  const [jitter, setJitter] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      setJitter({
        x: (Math.random() - 0.5) * intensity,
        y: (Math.random() - 0.5) * intensity,
      });
    }, frequency);

    return () => clearInterval(interval);
  }, [intensity, frequency]);

  return jitter;
}


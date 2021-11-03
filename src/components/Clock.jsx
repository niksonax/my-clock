import React, { useState, useEffect } from 'react';
import { usePageVisibility } from '../hooks/usePageVisibility.jsx';

const Clock = () => {
  const [date, setDate] = useState(new Date());

  const isVisible = usePageVisibility();

  const time = date.toLocaleTimeString();

  const refreshClock = () => setDate(new Date());

  useEffect(() => {
    if (isVisible) {
      const clockTimer = setInterval(refreshClock, 1000);

      return () => clearInterval(clockTimer);
    }
  }, [isVisible]);

  return (
    <div>
      <h2>{time}</h2>
    </div>
  );
};

export default Clock;

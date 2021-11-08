import React, { useState, useEffect } from 'react';
import { usePageVisibility } from '../hooks/usePageVisibility.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faStop, faTrash } from '@fortawesome/free-solid-svg-icons';
import './styles/Clock.css';

const Clock = ({ id, deleteClock }) => {
  const [date, setDate] = useState(new Date());
  const [isPaused, setIsPaused] = useState(false);

  const isVisible = usePageVisibility();

  const time = date.toLocaleTimeString();

  const refreshClock = () => setDate(new Date());

  const handleToggleClock = () => setIsPaused(!isPaused);
  const handleDeleteClock = () => deleteClock(id);

  useEffect(() => {
    if (isVisible && !isPaused) {
      const clockTimer = setInterval(refreshClock, 1000);

      return () => clearInterval(clockTimer);
    }
  }, [isVisible, isPaused]);

  return (
    <div className="clock">
      <h2 data-testid="time">{time}</h2>
      <button className="toggle-btn" onClick={handleToggleClock}>
        <FontAwesomeIcon icon={isPaused ? faPlay : faStop} size="2x" />
      </button>
      <button className="delete-btn" onClick={handleDeleteClock}>
        <FontAwesomeIcon icon={faTrash} size="2x" />
      </button>
    </div>
  );
};

export default Clock;

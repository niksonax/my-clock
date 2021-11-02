import React, { useState, useEffect } from 'react';

const displayValue = (value) => (value.length === 1 ? '0' + value : value);

const Clock = () => {
  const [date, setDate] = useState(new Date());

  const hours = date.getHours().toString();
  const minutes = date.getMinutes().toString();
  const seconds = date.getSeconds().toString();

  useEffect(() => {
    setInterval(() => setDate(new Date()), 1000);
  }, [date]);

  return (
    <div>
      <h2>
        {displayValue(hours)}:{displayValue(minutes)}:{displayValue(seconds)}
      </h2>
    </div>
  );
};

export default Clock;

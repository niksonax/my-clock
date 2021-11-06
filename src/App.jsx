import React, { useState, useEffect } from 'react';
import Clock from './components/Clock.jsx';
import './App.css';

const App = () => {
  const [clocks, setClocks] = useState([]);

  const addClock = () => setClocks((oldItems) => [...oldItems, <Clock />]);

  const deleteClock = () => setClocks((old) => old.slice(0, -1));

  const clocksRender = clocks.map((clock, index) => (
    <div key={index} className="clock">
      {clock}
    </div>
  ));

  return (
    <div className="container">
      <div className="button-container">
        <button id="add-btn" className="button" onClick={addClock}>
          Add
        </button>
        <button id="delete-btn" className="button" onClick={deleteClock}>
          Delete
        </button>
      </div>

      <div className="clocks">{clocksRender}</div>
    </div>
  );
};

export default App;

import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Modal from './components/Modal.jsx';
import Clock from './components/Clock.jsx';
import './App.css';

const App = () => {
  const [clocks, setClocks] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const addClock = () =>
    setClocks((oldItems) => [...oldItems, { id: uuidv4() }]);

  const deleteClock = (id) =>
    setClocks((old) => old.filter((clock) => clock.id !== id));

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  const clocksRender = clocks.map((clock) => (
    <Clock key={clock.id} id={clock.id} deleteClock={deleteClock} />
  ));

  return (
    <div className="container">
      <div className="button-container">
        <button id="add-btn" className="button" onClick={addClock}>
          Add
        </button>
        <button id="show-modal-btn" className="button" onClick={openModal}>
          Show Modal
        </button>
      </div>

      <div className="clocks">{clocksRender}</div>

      <Modal
        isShown={showModal}
        closeModal={closeModal}
        modalTitle="Modal Title"
      />
    </div>
  );
};

export default App;

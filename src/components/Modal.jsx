import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import './styles/Modal.css';

const Modal = ({ isShown, closeModal, modalTitle }) => {
  return (
    <div className={`root ${!isShown ? 'closed' : ''}`} onClick={closeModal}>
      <div className="modal">
        <div className="modal-header">
          <h3 className="modal-title">{modalTitle}</h3>
          <button id="close-modal-btn" onClick={closeModal}>
            <FontAwesomeIcon icon={faTimes} size="2x" />
          </button>
        </div>

        <div className="modal-body">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu
          commodo purus. Praesent sapien orci, egestas nec nisl ac, molestie
          viverra magna. Nunc ullamcorper tempus urna eget tincidunt. In semper
          facilisis dapibus. Nullam non augue a quam tempus interdum. Aliquam
          non sapien ac lorem fringilla aliquet id vitae enim. Morbi non turpis
          gravida, suscipit nulla non, gravida mi. Nam non elit porta mi
          ultricies porttitor.
        </div>

        <div className="modal-footer">Modal Footer</div>
      </div>
    </div>
  );
};

export default Modal;

import React from 'react';
import ReactDOM from 'react-dom';
import { FiX } from 'react-icons/fi';
import './Modal.scss';

const Modal = (props) => {
  return ReactDOM.createPortal(
    <div onClick={() => props.closeModal(props.id)} className="dimmer">
      <div className="modalBody" onClick={(e) => e.stopPropagation()}>
        <span onClick={() => props.closeModal(props.id)} className="modalClose">
          <FiX />
        </span>
        <div className="modalContent">{props.render}</div>
      </div>
    </div>,
    document.querySelector('#modal')
  );
};

export default Modal;

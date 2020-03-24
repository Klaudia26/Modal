import React from 'react';
import ReactDOM from 'react-dom';

const Modal = (props) => {
  return ReactDOM.createPortal(
    <div className="dimmer">
      <div className="modalBody">
        <span onClick={() => props.closeModal(props.id)} className="modalClose">
          X
        </span>
        <div className="modalContent">{props.render}</div>
      </div>
    </div>,
    document.querySelector('#modal')
  );
};

export default Modal;

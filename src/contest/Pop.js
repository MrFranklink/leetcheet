import React from 'react';

function Popup({ isOpen, onClose, message }) {
  return (
    <div className={`popup ${isOpen ? 'open' : ''}`}>
      <div className="popup-content">
        <div className="popup-header">
          <h3>Error</h3>
          <button className="close-button" onClick={onClose}>
            &times;
          </button>
        </div>
        <p>{message}</p>
      </div>
    </div>
  );
}

export default Popup;

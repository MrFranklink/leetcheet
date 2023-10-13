import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { Icon } from '@iconify/react';
import buttonData from './ButtonData';

function ModalBox({ show, onHide, title, content, link }) {
  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>{content}</p>
        {link && (
          <a href={link} target="_blank" rel="noopener noreferrer">
            <Icon icon="simple-icons:leetcode" />
          </a>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

function saveToLocalStorage(title, content, link) {
  const dataToSave = {
    title,
    content,
    link,
  };
  localStorage.setItem('modalData', JSON.stringify(dataToSave));
}

function getFromLocalStorage() {
  const savedData = localStorage.getItem('modalData');
  console.log('Saved Data:', savedData);
  return savedData ? JSON.parse(savedData) : null;
}

function CheckboxList({ handleCheckboxChange }) {
  const [showModal, setShowModal] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [modalContent, setModalContent] = useState('');
  const [modalLink, setModalLink] = useState('');

  useEffect(() => {
    const savedData = getFromLocalStorage();
    if (savedData) {
      setModalTitle(savedData.title);
      setModalContent(savedData.content);
      setModalLink(savedData.link);
    }
  }, []);

  const handleButtonClick = (title, content, link) => {
    saveToLocalStorage(title, content, link);
    console.log('Data saved to local storage');

    setModalTitle(title);
    setModalContent(content);
    setModalLink(link);
    setShowModal(true);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
      {buttonData.map((button, index) => (
        <div key={index}>
          <label style={{ display: 'flex', alignItems: 'center', marginLeft: '222px', marginTop: '20px' }}>
            <input type="checkbox" onChange={handleCheckboxChange} style={{ marginRight: '10px', color: 'green' }} />
            <button onClick={() => handleButtonClick(button.title, button.content, button.link)}>
              {button.title}
            </button>
          </label>
        </div>
      ))}
      <ModalBox show={showModal} onHide={() => setShowModal(false)} title={modalTitle} content={modalContent} link={modalLink} />
    </div>
  );
}

export default CheckboxList;

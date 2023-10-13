import React, { useState, useEffect } from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { Icon } from '@iconify/react';

import Linked from './Linked_list'; 

function CombinedComponents() {
  const totalCheckboxes = Linked.length;

  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState({});
  const [link, setLink] = useState('');

  
  const initialCheckedCheckboxes = JSON.parse(localStorage.getItem('checkedCheckboxes')) || Array(totalCheckboxes).fill(false);
  const [checkedCheckboxes, setCheckedCheckboxes] = useState(initialCheckedCheckboxes);

  const handleCheckboxChange = (index) => {
   
    const newCheckedCheckboxes = [...checkedCheckboxes];
    newCheckedCheckboxes[index] = !newCheckedCheckboxes[index];
    setCheckedCheckboxes(newCheckedCheckboxes);

   
    localStorage.setItem('checkedCheckboxes', JSON.stringify(newCheckedCheckboxes));
  };

  const overallProgress = (checkedCheckboxes.filter(Boolean).length / totalCheckboxes) * 100;
  const progressBarColor = overallProgress < 50 ? 'danger' : 'success';

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const fetchModalData = (question) => {
    setModalData(question);
    setLink(question.link);
    openModal();
  };

  useEffect(() => {
    
    localStorage.setItem('checkedCheckboxes', JSON.stringify(checkedCheckboxes));
  }, [checkedCheckboxes]);
 

  return (
    <div>
      <ProgressBar
        now={overallProgress}
        label={`${overallProgress}%`}
        variant={progressBarColor}
      />
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
        {Linked.map((question, index) => (
          <div key={index}>
            <label style={{ display: 'flex', alignItems: 'center', marginLeft: '20px', marginTop: '20px' }}>
              <input
                type="checkbox"
                onChange={() => handleCheckboxChange(index)}
                checked={checkedCheckboxes[index]}
                style={{ marginRight: '10px', color: 'green' }}
              />
              <button onClick={() => fetchModalData(question)}>{question.title}</button>
            </label>
          </div>
        ))}
      </div>
      <Modal show={showModal} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>{modalData.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{modalData.content}</p>
          {link && (
            <a href={link} target="_blank" rel="noopener noreferrer">
              <Icon icon="simple-icons:leetcode" />
            </a>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default CombinedComponents;

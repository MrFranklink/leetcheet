import { useState } from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import { Link } from 'react-router-dom';
import './ToggleButtonExample.css'; 

function ToggleButtonExample() {
  const [radioValue, setRadioValue] = useState('1');

  const radios = [
    { name: 'Array', value: '2', path: '/Array' },
    { name: 'Linked List', value: '2', path: '/linked-list' },
    { name: 'Stack', value: '3', path: '/stack' },
  ];

  return (
    <div className="d-flex justify-content-center">
      <ButtonGroup>
        {radios.map((radio, idx) => (
          <Link to={radio.path} key={idx} style={{ textDecoration: 'none' }}>
            <ToggleButton
              id={`radio-${idx}`}
              type="radio"
              variant="outline-dark"
              name="radio"
              value={radio.value}
              checked={radioValue === radio.value}
              onChange={(e) => setRadioValue(e.currentTarget.value)}
              className="animated-button" 
            >
              {radio.name}
            </ToggleButton>
          </Link>
        ))}
      </ButtonGroup>
    </div>
  );
}

export default ToggleButtonExample;

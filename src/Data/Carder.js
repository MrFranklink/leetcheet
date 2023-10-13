import React from 'react';
import Card from 'react-bootstrap/Card';
import CombinedComponents from './prog';
import { images } from '../imagesdata/imagesstack';
import './carder.css'; 

function Carder() {
  const cardBodyStyle = {
    fontWeight: 'bold',
    textAlign: 'center',
    margin: '20px',
    border: '2px solid grey',
  };

  const labelStyle = {
    fontSize: '20px',
  };

  return (
    <Card body style={cardBodyStyle}>
      <br />
      <label style={labelStyle}>Linked List Question</label>
      <CombinedComponents />
      <img
        src={images.fGif}
        alt="A colorful character animation"
        className="hide-image" 
        style={{ maxWidth: '16%', marginLeft: '60%', marginTop: '-23%', position: 'absolute' }}
      />
    </Card>
  );
}

export default Carder;

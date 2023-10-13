import React from 'react';
import Card from 'react-bootstrap/Card';
import { images } from '../imagesdata/imagesstack'; 
import CombinedComponent from './Progress';
import '../Data/carder.css';

function Cards() {
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
      <label style={labelStyle}>Arrays Question</label>
      <CombinedComponent />
      <img src={images.eGif} alt="A colorful character animation"  className="hide-image" style={{ maxWidth: '25%', marginLeft:'60%',marginTop:'-27%', position:'absolute'}} /> 
    </Card>
  );
}

export default Cards;

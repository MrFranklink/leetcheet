import React from 'react';
import Card from 'react-bootstrap/Card';
import CombinedComponenter from './stackdata';
import { images } from '../../imagesdata/imagesstack'; 
import '../../Data/carder.css';

function Car() {
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
      <label style={labelStyle}>Stack Question</label>
      <CombinedComponenter />
      <img src={images.dGif} alt="A colorful character animation"  className="hide-image" style={{ maxWidth: '23%', marginLeft:'60%',marginTop:'-27%', position:'absolute'}} />
    </Card>
  );
}

export default Car;
